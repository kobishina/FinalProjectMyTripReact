import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [status, setStatus] = useState(""); // state for success or error message
    const [loading, setLoading] = useState(false); // state to manage button loading

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // start loading
        try {
            await axios.post("http://localhost:3002/api/whatsapp/sendWhatsapp", formData);
            setStatus("הפרטים נשלחו בהצלחה!"); // success message
            setFormData({
                name: "",
                email: "",
                phone: "",
            }); // clear form
        } catch (error) {
            setStatus("שגיאה בשליחת הטופס. אנא נסו שוב."); // error message
            console.error(error);
        } finally {
            setLoading(false); // stop loading
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>💬 צור קשר</h2>
            <p style={styles.description}>נשמח לעזור! השאירו פרטים ונחזור אליכם בהקדם.</p>

            {status && <div style={status.includes("הצלחה") ? styles.successMessage : styles.errorMessage}>{status}</div>}

            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>שם מלא</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="הקלד את שמך"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>אימייל</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>טלפון</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="052-1234567"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>

                <button type="submit" style={loading ? { ...styles.button, animation: 'spin 1s linear infinite' } : styles.button}>
                    {loading ? 'שולח...' : 'שלח פרטים 📩'}
                </button>
            </form>
        </div>
    );
};

// עיצוב באמצעות אובייקט סטיילים פנימי
const styles = {
    container: {
        backgroundColor: "white",
        color: "black",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        padding: "40px",
        maxWidth: "800px",
        width: "100%",
        margin: "50px auto",
        border: "1px solid #ddd",
        direction: "rtl",
        textAlign: "right",
        position: "relative",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "10px",
    },
    description: {
        textAlign: "center",
        color: "#555",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        fontWeight: "bold",
        marginBottom: "5px",
    },
    input: {
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
        outline: "none",
    },
    button: {
        backgroundColor: "#007BFF",
        color: "white",
        padding: "10px 20px",  // הכפתור יהיה קטן יותר
        border: "none",
        borderRadius: "5px",
        fontSize: "16px", // כפתור בגודל סביר
        cursor: "pointer",
        transition: "background 0.3s",
        marginTop: "10px",
    },
    successMessage: {
        color: "green",
        textAlign: "center",
        fontSize: "18px",
        marginBottom: "20px",
        fontWeight: "bold",
    },
    errorMessage: {
        color: "red",
        textAlign: "center",
        fontSize: "18px",
        marginBottom: "20px",
        fontWeight: "bold",
    }
};

// הוספת אנימציה לכפתור
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

export default ContactForm;
