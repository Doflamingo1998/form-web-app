import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changePassword } from "../../redux/actions/authActions";


const ChangePassword = ({ changePassword }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();

    const handleCurrentPassword = (e) => setCurrentPassword(e.target.value);
    const handlesetNewPassword = (e) => setNewPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error('Mật khẩu xác nhận không khớp!');
            return;
        }

        try {
            await changePassword(currentPassword, newPassword);
            toast.success('Đổi mật khẩu thành công!');
            history.push('/dashboard');
        } catch (error) {
            toast.error('Đổi mật khẩu thất bại. Vui lòng thử lại sau.');
        }
    };

    return (
        <div className="container">
            <ToastContainer />
            <h2>Đổi Mật Khẩu</h2>
            <div>
                <label>Mật khẩu hiện tại:</label>
                <input
                    type="password"
                    value={currentPassword}
                    onChange={handleCurrentPassword}
                />
            </div>
            <div>
                <label>Mật khẩu mới:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={handlesetNewPassword}
                />
            </div>
            <div>
                <label>Xác nhận mật khẩu mới:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                />
            </div>
            <button onClick={handleChangePassword}>Đổi Mật Khẩu</button>
        </div>
    );
}

const mapDispatchToProps = {
    changePassword
};


export default connect(null, mapDispatchToProps)(changePassword);
