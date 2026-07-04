import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCommentForm } from "../hooks/useCommentForm";
import { getComments } from "../services/commentService";
import PersianDate from "../services/PersionDate";
import Title from "./Title";

const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 3%;
`;

const CommentForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SubmitCommentBtn = styled.button`
  border: none;
  padding: 20px 35px;
  cursor: pointer;
  border-radius: 15px;
  font-weight: 900;
  transition: all 0.3s ease;
  font-size: var(--font-size-xl);
  background-color: var(--color-primary);
  color: white;

  &:hover {
    transform: scale(0.95);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Input = styled.textarea`
  width: 50vw;
  padding: 12px 16px;
  resize: none;
  border: ${(props) => (props.error ? "2px solid red" : "1px solid #ccc")};
  border-radius: 5px;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  @media (max-width: 400px) {
    width: 100vw;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: var(--font-size-sm);
  margin-top: -15px;
  animation: shake 0.5s ease;

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;

const CommentList = styled.div`
  width: 80vw;
  max-height: 800px;
  overflow-y: auto;
  margin-top: 30px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const CommentItem = styled.div`
  width: 45%;
  margin: 0 auto;
  background-color: var(--color-accent);
  padding: 10px 5px;
  margin-bottom: 15px;
  border-right: 8px solid var(--color-primary);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(-5px);
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1px;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const CommentContent = styled.p`
  width: 80%;
  margin: 0 auto;
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-info);
  line-height: 1.6;
  word-wrap: break-word;
`;

const UserName = styled.div`
  color: white;
  font-weight: bold;
  font-size: var(--font-size-sm);
`;

const CommentDate = styled.small`
  color: white;
  font-size: var(--font-size-xs);
`;

const LoginMessage = styled.div`
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  margin: 10px 0;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const NoComment = styled.div`
  color: var(--color-accent);
  margin-top: 20px;
  font-size: var(--font-size-md);
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
`;

function Comments({ commentsData, newsId, onCommentAdded }) {
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        setLoading(true);
        const data = await getComments(newsId);
        setComments(data || []);
        setError(null);
      } catch (err) {
        setError("خطا در بارگذاری نظرات");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [newsId]);

  useEffect(() => {
    if (commentsData) {
      setComments(commentsData);
    }
  }, [commentsData]);

  const formik = useCommentForm({
    newsId,
    user,
    isAuthenticated,
    setComments,
    onCommentAdded,
    setError
  });

  if (authLoading || loading) {
    return (
      <CommentsContainer>
        <Title titleName="نظرات کاربران" />
        <LoadingContainer>
          <div>در حال بارگذاری نظرات...</div>
        </LoadingContainer>
      </CommentsContainer>
    );
  }

  return (
    <CommentsContainer>
      <Title titleName="نظرات کاربران" font="var(--font-size-md)" />

      {!isAuthenticated ? (
        <LoginMessage>
          برای ثبت نظر لطفاً وارد حساب کاربری خود شوید{" "}
          <Link to="/login" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
            وارد شدن
          </Link>
        </LoginMessage>
      ) : (
        <CommentForm onSubmit={formik.handleSubmit}>
          <Input
            name="comment"
            placeholder="نظر خود را درج نمایید..."
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.comment && formik.errors.comment)}
            disabled={formik.isSubmitting}
          />

          {formik.touched.comment && formik.errors.comment && (
            <ErrorMessage>{formik.errors.comment}</ErrorMessage>
          )}

          <SubmitCommentBtn
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? "در حال ارسال..." : "درج نظر"}
          </SubmitCommentBtn>
        </CommentForm>
      )}

      {comments?.length > 0 ? (
        <CommentList>
          {comments.map((comment, index) => (
            <CommentItem 
              key={comment.id || index}
              style={{
                animation: `fadeIn 0.3s ease ${index * 0.05}s`
              }}
            >
              <CommentHeader>
                <UserName>{comment.user_name || "ناشناس"}</UserName>
                <CommentDate>
                  {PersianDate({ NewsDate: comment.created_at })}
                </CommentDate>
              </CommentHeader>
              <CommentContent>{comment.content}</CommentContent>
            </CommentItem>
          ))}
        </CommentList>
      ) : (
        <NoComment>
          هنوز نظری ثبت نشده است. اولین نفری باشید که نظر می‌دهید!
        </NoComment>
      )}
    </CommentsContainer>
  );
}

export default Comments;