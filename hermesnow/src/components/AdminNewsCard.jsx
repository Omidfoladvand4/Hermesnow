import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import posterImage from "../assets/HermesNowBannar1.jpg";
import { fadeIn } from "../styles/animations";


export const NewsCard = styled.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(108, 146, 160, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.3s ease-out;
  animation-fill-mode: backwards;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const NewsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const NewsCardTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 900;
  color: var(--color-secondary);
  margin: 0;
  flex: 1;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NewsCardSubject = styled.span`
  background: var(--color-primary);
  font-weight: 900;
  padding: 4px 12px;
  font-size: 14px;
  color: var(--color-accent);
  border-radius: 20px;
  border: 1px solid var(--color-accent);
  white-space: nowrap;
  flex-shrink: 0;
`;

export const NewsCardBody = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NewsCardImage = styled.img`
  width: 50%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--color-info);
  flex-shrink: 0;
`;

export const NewsCardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  `;

export const NewsCardJournalist = styled.div`
  font-size: var(--font-size-lg);
  color: var(--color-info);
  font-weight: 500;
`;

export const NewsCardDate = styled.div`
  font-size: var(--font-size-lg);
  color: var(--color-info);
`;

export const NewsCardActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  justify-content: flex-end;
  border-top: 1px solid rgba(108, 146, 160, 0.15);
  padding-top: 10px;
`;

export const ActionButton = styled.button`
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 4px;

    background: var(--color-accent);
    color: white;

  &:active {
    transform: scale(0.95);
  }
`;


function AdminNewsCard({ item, onEdit, onDelete, index }) {
  return (
    <NewsCard style={{ animationDelay: `${index * 0.05}s` }}>
      <NewsCardHeader>
        <NewsCardTitle>{item.NewsTitle}</NewsCardTitle>
        <NewsCardSubject>{item.NewsSubject}</NewsCardSubject>
      </NewsCardHeader>

      <NewsCardBody>
        {item.MainImage && (
          <NewsCardImage src={item.MainImage || posterImage} alt={item.NewsTitle} />
        )}
        <NewsCardInfo>
          <NewsCardJournalist>
            {item.Journalist ? `خبرنگار: ${item.Journalist}` : "—"}
          </NewsCardJournalist>
          <NewsCardDate>
            {new Date(item.NewsDate).toLocaleDateString("fa-IR")}
          </NewsCardDate>
        </NewsCardInfo>
      </NewsCardBody>

      <NewsCardActions>
        <ActionButton onClick={() => onEdit(item.id)}>
          <EditIcon style={{ fontSize: 18 }} /> ویرایش
        </ActionButton>
        <ActionButton onClick={() => onDelete(item.id)}>
          <DeleteIcon style={{ fontSize: 18 }} /> حذف
        </ActionButton>
      </NewsCardActions>
    </NewsCard>
  );
}

export default AdminNewsCard;