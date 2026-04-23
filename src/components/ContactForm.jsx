import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

function ContactForm() {
    const { t } = useLanguage();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/xojyyjwg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="bento-card col-span-2">
            <h2 className="font-heading" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{t('form_title')}</h2>
            
            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <CheckCircle size={60} color="var(--accent-neon)" style={{ marginBottom: '20px' }} />
                    <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>{t('form_success')}</p>
                </div>
            ) : (
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
                        style={{ gridColumn: 'span 2', minHeight: '150px' }} 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                    
                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '10px',
                            opacity: status === 'loading' ? 0.7 : 1,
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="rotating" size={20} />
                                {t('form_send')}...
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                {t('form_send')}
                            </>
                        )}
                    </button>

                    {status === 'error' && (
                        <p style={{ gridColumn: 'span 2', color: '#ff4444', textAlign: 'center', marginTop: '10px', fontSize: '0.9rem' }}>
                            {t('form_error')}
                        </p>
                    )}
                </form>
            )}
        </div>
    );
}

export default ContactForm;
