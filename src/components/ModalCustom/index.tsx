import { Modal } from 'antd'
import React from 'react'

interface IPropsModalCustom {
    title: string;
    open: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    children: React.ReactNode;
    footer: React.ReactNode;
}

const ModalCustom = ({ title, open, handleOk, handleCancel, children, footer }: IPropsModalCustom) => {
  return (
    <Modal
        title={title}
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footer}
    >
        {children}
      
    </Modal>
  )
}

export default ModalCustom
