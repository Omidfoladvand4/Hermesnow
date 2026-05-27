import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { supabase } from '../lib/supabaseClient'
import PersianDate from '../services/PersionDate'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const CommentsContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background-color: var(--color-primary);
    padding: 3%;
`

const SubmitCommentBtn = styled.button`
    border: none;
    padding: 20px 35px;
    cursor: pointer;
    border-radius: 2px;
    font-weight: 900;
    transition: all .3s ease;
    font-size: var(--font-size-md);
    box-shadow: 20px 20px 6px #ffffff2b;
    border-radius: 15px;
    &:hover {
        transform: scale(.95);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

const Input = styled.textarea`
    width: 50vw;
    height: 50px;
    padding: 10px 15px;
    resize: none;
    border: ${props => props.error ? '2px solid red' : '1px solid #ccc'};
    border-radius: 5px;
    font-family: inherit;
`

const ErrorMessage = styled.div`
    color: red;
    font-size: var(--font-size-sm);
    margin-top: -15px;
`

const CommentList = styled.div`
    width: 80vw;
    max-height: 500px;
    overflow-y: auto;
    margin-top: 30px;
`

const CommentItem = styled.div`
background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
    border-right: 8px solid var(--color-info);
`

const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

const CommentContent = styled.p`
    font-size: var(--font-size-md);
    line-height: 1.6;
`

const CommentDate = styled.small`
    color: green;
    font-size: var(--font-size-sm);
`

const LoginMessage = styled.div`
    color: var(--color-primary);
    font-size: var(--font-size-sm);
    margin: 10px 0;
`

function Comments({ commentsData, newsId, onCommentAdded }) {
    const { user, loading, isAuthenticated } = useAuth()
    const [comments, setComments] = React.useState(commentsData || [])

    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        validationSchema: Yup.object({
            comment: Yup.string()
                .min(10, 'نظر باید حداقل ۱۰ کاراکتر باشد')
                .max(500, 'نظر باید حداکثر ۵۰۰ کاراکتر باشد')
                .required('لطفاً نظر خود را وارد کنید')
        }),
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                if (!isAuthenticated) {
                    alert('برای ثبت نظر باید وارد شوید')
                    return
                }

                const newComment = {
                    id: Date.now(),
                    content: values.comment,
                    user_name: user?.UserName || user?.email?.split('@')[0] || 'کاربر',
                    created_at: new Date().toISOString()
                }

                const currentComments = comments || []
                const updatedComments = [newComment, ...currentComments]

                const { error } = await supabase
                    .from('News')
                    .update({ Comments: updatedComments })
                    .eq('id', newsId)

                if (error) throw error

                setComments(updatedComments)
                
                if (onCommentAdded) {
                    onCommentAdded(newComment)
                }

                resetForm()
                
            } catch (error) {
                console.error('خطا در ثبت نظر:', error)
                alert('خطا در ثبت نظر. لطفاً دوباره تلاش کنید.')
            } finally {
                setSubmitting(false)
            }
        }
    })

    const fetchComments = async () => {
        try {
            const { data, error } = await supabase
                .from('News')
                .select('Comments')
                .eq('id', newsId)
                .single()

            if (error) throw error
            setComments(data?.Comments || [])
            
        } catch (error) {
            console.error('خطا در دریافت نظرات:', error)
        }
    }

    React.useEffect(() => {
        if (newsId) {
            fetchComments()
        }
    }, [newsId])

    if (loading) {
        return (
            <CommentsContainer>
                <Title titleName='نظرات کاربران' />
                <div>در حال بارگذاری...</div>
            </CommentsContainer>
        )
    }

    return (
        <CommentsContainer>
            <Title titleName='نظرات کاربران' font={`var(--font-size-md)`}/>
            
            {!isAuthenticated ? (
                <LoginMessage>
                    برای ثبت نظر لطفاً وارد حساب کاربری خود شوید<Link  to= '/login'>وارد شدن </Link> 
                </LoginMessage>
            ) : (
                <form onSubmit={formik.handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <Input
                        name="comment"
                        placeholder="نظر خود را درج نمایید..."
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.comment && formik.errors.comment}
                    />
                    
                    {formik.touched.comment && formik.errors.comment && (
                        <ErrorMessage>{formik.errors.comment}</ErrorMessage>
                    )}
                    
                    <SubmitCommentBtn 
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'در حال ارسال...' : 'درج نظر'}
                    </SubmitCommentBtn>
                </form>
            )}

            {comments && comments.length > 0 ? (
                <CommentList>
                    {comments.map((comment) => (
                        <CommentItem key={comment.id}>
                            <CommentHeader>
                                <span>{comment.user_name || 'ناشناس'}@</span>
                            </CommentHeader>
                            <CommentContent>{comment.content}</CommentContent>
                            <CommentDate>
                                {PersianDate({ NewsDate: comment.created_at })}
                            </CommentDate>
                        </CommentItem>
                    ))}
                </CommentList>
            ) : (
                <div style={{ color: 'var(--color-info)', marginTop: '20px' }}>
                    هنوز نظری ثبت نشده است. اولین نفری باشید که نظر می‌دهید!
                </div>
            )}
        </CommentsContainer>
    )
}

export default Comments