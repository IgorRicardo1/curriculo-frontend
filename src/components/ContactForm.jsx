import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function ContactForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Mensagem enviada com sucesso! (Demonstração)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bento-card col-span-2">
            <h2 className="font-heading" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{t('form_title')}</h2>
            <form onSubmit={handleSubmit} className="contact-form-container">
                <input 
                    type="text" 
                    name="name" 
                    placeholder={t('form_name')} 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder={t('form_email')} 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="subject" 
                    placeholder={t('form_subject')} 
                    style={{ gridColumn: 'span 2' }} 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="message" 
                    placeholder={t('form_message')} 
                    rows="4" 
                    style={{ gridColumn: 'span 2' }} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                ></textarea>
                <button type="submit">{t('form_send')}</button>
            </form>
        </div>
    );
}

export default ContactForm;
