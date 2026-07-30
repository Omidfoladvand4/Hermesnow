import React, { useEffect } from "react";
import styled from "styled-components";
import { fadeIn } from "../styles/animations";
import CloseIcon from "@mui/icons-material/Close";


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  animation: ${fadeIn} 0.25s ease-out;
  padding: 20px;
`;

const ModalContainer = styled.div`
  background: var(--color-secondary);
  border-radius: 24px;
  max-width: 450px;
  width: 100%;
  padding: 32px;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--color-info);
  animation: ${fadeIn} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;

  @media (max-width: 480px) {
    padding: 24px 20px;
    margin: 10px;
    max-width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--color-primary);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-secondary);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: rotate(90deg);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ModalIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: #ef4444;
  font-size: 32px;
`;

const ModalTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 900;
  color: var(--color-secondary);
  text-align: center;
  margin: 0 0 8px 0;
`;

const ModalText = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  text-align: center;
  margin: 0 0 24px 0;
  line-height: 1.6;
  font-weight: 900;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ModalButton = styled.button`
  padding: 12px 32px;
  border: none;
  border-radius: 12px;
  font-size: var(--font-size-md);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 480px) {
    padding: 14px 20px;
    width: 100%;
  }
`;

const CancelButton = styled(ModalButton)`
  background: var(--color-info);
  color: #000;

`;

const ConfirmButton = styled(ModalButton)`
  background: #ef4444;
  color: white;

  &:hover {
    background: #dc2626;
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
  }
`;

function Modal({
  isOpen,
  onClose,
  onConfirm,
  title = "تأیید",
  message = "آیا از انجام این عملیات اطمینان دارید؟",
  confirmText = "تأیید",
  cancelText = "انصراف",
  icon,
  type , // 'danger' | 'warning' | 'info'
  isLoading = false,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getColors = () => {
    switch (type) {
      case "danger":
        return {
          iconBg: "rgba(239, 68, 68, 0.15)",
          iconColor: "#ef4444",
          confirmBg: "#ef4444",
          confirmHover: "#dc2626",
        };
      case "warning":
        return {
          iconBg: "rgba(245, 158, 11, 0.15)",
          iconColor: "#f59e0b",
          confirmBg: "#f59e0b",
          confirmHover: "#d97706",
        };
      case "info":
        return {
          iconBg: "rgba(59, 130, 246, 0.15)",
          iconColor: "#3b82f6",
          confirmBg: "#3b82f6",
          confirmHover: "#2563eb",
        };
      default:
        return {
          iconBg: "rgba(239, 68, 68, 0.15)",
          iconColor: "#ef4444",
          confirmBg: "#ef4444",
          confirmHover: "#dc2626",
        };
    }
  };

  const colors = getColors();

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIcon style={{ fontSize: 20 }} />
        </CloseButton>

        <ModalIcon style={{ background: colors.iconBg, color: colors.iconColor }}>
          <span style={{ fontSize: 32 }}>{icon}</span>
        </ModalIcon>

       
        <ModalTitle>{title}</ModalTitle>

        
        <ModalText>{message}</ModalText>

        <ModalActions>
          <CancelButton onClick={onClose} disabled={isLoading}>
            {cancelText}
          </CancelButton>
          <ConfirmButton
            onClick={onConfirm}
            disabled={isLoading}
            style={{
              background: isLoading ? "var(--color-neutral)" : colors.confirmBg,
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.6 : 1,
            }}
          >
            {isLoading ? "در حال انجام..." : confirmText}
          </ConfirmButton>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default Modal;