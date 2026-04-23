import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
    pt: {
        nav_start: "Início",
        nav_projects: "Projetos",
        nav_career: "Carreira",
        nav_contact: "Contato",
        hero_greeting: "eu sou",
        hero_available: "Disponível para Projetos",
        about_title: "Sobre Mim",
        about_location: "LOCALIZAÇÃO",
        projects_title: "Trabalhos Selecionados",
        projects_subtitle: "Explorando as fronteiras entre engenharia robusta e design intuitivo.",
        projects_challenge: "O Desafio",
        projects_engineering: "A Engenharia",
        projects_diff: "Diferencial",
        exp_title: "Trajetória Profissional",
        edu_title: "Formação Acadêmica",
        contact_title: "Conecte-se",
        footer_copy: "Criado com foco em performance.",
        form_title: "Fale Comigo",
        form_name: "Nome",
        form_email: "Email",
        form_subject: "Assunto",
        form_message: "Mensagem",
        form_send: "Enviar",
        theme_label: "Tema",
        lang_label: "Idioma"
    },
    en: {
        nav_start: "Home",
        nav_projects: "Projects",
        nav_career: "Career",
        nav_contact: "Contact",
        hero_greeting: "I am",
        hero_available: "Available for Projects",
        about_title: "About Me",
        about_location: "LOCATION",
        projects_title: "Selected Works",
        projects_subtitle: "Exploring the boundaries between robust engineering and intuitive design.",
        projects_challenge: "The Challenge",
        projects_engineering: "The Engineering",
        projects_diff: "Differentiator",
        exp_title: "Professional Trajectory",
        edu_title: "Academic Background",
        contact_title: "Connect",
        footer_copy: "Created with focus on performance.",
        form_title: "Contact Me",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_send: "Send",
        theme_label: "Theme",
        lang_label: "Language"
    },
    es: {
        nav_start: "Inicio",
        nav_projects: "Proyectos",
        nav_career: "Carrera",
        nav_contact: "Contacto",
        hero_greeting: "yo soy",
        hero_available: "Disponible para Proyectos",
        about_title: "Sobre Mí",
        about_location: "UBICACIÓN",
        projects_title: "Trabajos Seleccionados",
        projects_subtitle: "Explorando las fronteras entre ingeniería robusta y diseño intuitivo.",
        projects_challenge: "El Desafío",
        projects_engineering: "La Ingeniería",
        projects_diff: "Diferencial",
        exp_title: "Trayectoria Profesional",
        edu_title: "Formación Académica",
        contact_title: "Conéctate",
        footer_copy: "Creado con foco en el rendimiento.",
        form_title: "Contáctame",
        form_name: "Nombre",
        form_email: "Correo",
        form_subject: "Asunto",
        form_message: "Mensaje",
        form_send: "Enviar",
        theme_label: "Tema",
        lang_label: "Idioma"
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'pt');

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
