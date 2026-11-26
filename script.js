document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    const STORAGE_KEY = 'pytli_dialog_history_v8';
    const APP_WHATSAPP = '59170617170';
    const MAX_DIALOG_CHARS = 250;

    // Opciones dependientes exactas según ExperticiaProfesional.pdf
    const SUBSUBJECT_OPTIONS = {
        'Tecnologías Legales Inteligentes:': [
            'Proceso de Análisis de diligencia debida documental (Due Diligence Documental) asociada a todo el entorno de las Tecnologías de la Información (Auditoría Integral de IT-Legal)',
            'Arquitectura Normativa (Ley) Inteligente y Automatización Contractual.',
            'Gobernanza Continua, Cultura Digital y Asistencia y Asesoramiento Legal en Informática y Tecnologías Legales Inteligentes.'
        ],
        'Derecho Penal:': [
            'Delitos Informáticos (Código Penal)',
            'Ilícitos Informáticos y Fraude Digital',
            'Informática Forense y Análisis e Interpretación de la Evidencia Digital',
            'Ingeniería Inversa'
        ],
        'Derecho Civil:': [
            'Contratos Electrónicos',
            'Contratos Informáticos (Sw, Hw, Redes y Persona Digital)',
            'Contratos SLA (acuerdo formal entre proveedor y cliente)',
            'Auditoria de Contratos'
        ],
        'Derecho Informático:': [
            'Derechos de Autor y Propiedad Intelectual',
            'Ingeniería Jurídica',
            'Informetría y Jurismetria'
        ],
        'Derecho Laboral:': [
            'Regula, Reglamenta y Fiscaliza la conducta humana de la Persona Digital'
        ],
        'Informática:': [
            'Auditoria Informática',
            'Patrullaje Cibernético',
            'Análisis de Redes Sociales',
            'Triangulación de Llamadas'
        ],
        'Seguridad de la Información:': [
            'Continuidad del Negocio',
            'Normalización de Políticas',
            'Aspectos Legales en Seguridad de la Información',
            'Ingeniería Social'
        ],
        'Asistencia y Asesoramiento Legal en Tecnologías de la Información:': [
            'Billetera Digital y Dinero Electrónico (criptomonedas)',
            'Minería de Datos',
            'Comercio Electrónico, Firma Digital y Certificación Digital',
            'Protección de Datos Personales y Corporativos',
            'Protección de Activos Patrimoniales en TIC',
            'Análisis Numérico y Análisis de Datos',
            'Licenciamiento de Software y Software Libre'
        ]
    };

=======
    const STORAGE_KEY = 'pytli_dialog_history_v4';
    const APP_WHATSAPP = '59170617170';
    const MAX_DIALOG_CHARS = 250;

>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
    // 1. Menú hamburguesa para smartphones
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Copiar Binance UID al portapapeles
    const btnCopiar = document.getElementById('btn-copiar-uid');
    if (btnCopiar) {
        btnCopiar.addEventListener('click', () => {
            const uidTexto = document.getElementById('binance-uid').innerText;
            navigator.clipboard.writeText(uidTexto).then(() => {
                const textoOriginal = btnCopiar.innerText;
                btnCopiar.innerText = '¡Copiado!';
                btnCopiar.style.background = '#25D366';
                btnCopiar.style.color = '#ffffff';

                setTimeout(() => {
                    btnCopiar.innerText = textoOriginal;
                    btnCopiar.style.background = '#f0b90b';
                    btnCopiar.style.color = '#000000';
                }, 2000);
            });
        });
    }

    // 3. Modales nativos (<dialog>)
    document.querySelectorAll('.link-modal').forEach(boton => {
        boton.addEventListener('click', () => {
            const modalId = boton.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.showModal();
            }
        });
    });

    document.querySelectorAll('.btn-cerrar-modal').forEach(boton => {
        boton.addEventListener('click', () => {
            const modal = boton.closest('dialog');
            if (modal) {
                modal.close();
            }
        });
    });

    document.querySelectorAll('.modal-legal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });
    });

<<<<<<< HEAD
    // 4. Cuadro de diálogo (Chat Analítico - Derecho Informático)
=======
    // 4. Cuadro de diálogo (Derecho Informático)
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
    const liveClockEl = document.getElementById('dialogLiveClock');
    const captchaQuestionEl = document.getElementById('captchaQuestion');
    const captchaInputEl = document.getElementById('captchaInput');
    const verifyCaptchaBtnEl = document.getElementById('verifyCaptchaBtn');
    const refreshCaptchaBtnEl = document.getElementById('refreshCaptchaBtn');
    const captchaStatusEl = document.getElementById('captchaStatus');
    const fieldsetEl = document.getElementById('dialogFieldsFieldset');
    const formEl = document.getElementById('adminDialogForm');
<<<<<<< HEAD
    const subjectHiddenEl = document.getElementById('dialogSubject');
    const subjectDropdownToggleEl = document.getElementById('subjectDropdownToggle');
    const subjectDropdownTextEl = document.getElementById('subjectDropdownText');
    const subjectMenuEl = document.getElementById('subjectBulletMenu');
    const subjectItems = Array.from(document.querySelectorAll('#subjectBulletMenu .subject-bullet-item'));
    const selectedSubjectHintEl = document.getElementById('selectedSubjectHint');
    const subSubjectBoxEl = document.getElementById('subSubjectBox');
    const subSubjectLabelEl = document.getElementById('subSubjectLabel');
    const subSubjectListEl = document.getElementById('subSubjectList');
    const selectedSubSubjectHintEl = document.getElementById('selectedSubSubjectHint');
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
    const dialogContentEl = document.getElementById('dialogContent');
    const charCounterEl = document.getElementById('dialogCharCounter');
    const messagesEl = document.getElementById('dialogMessages');
    const decisionBoxEl = document.getElementById('dialogDecisionBox');
<<<<<<< HEAD
    const sendAppWhatsappBtnEl = document.getElementById('sendAppWhatsappBtn');
=======
    const downloadBtnEl = document.getElementById('downloadLastFileBtn');
    const sendAppWhatsappBtnEl = document.getElementById('sendAppWhatsappBtn');
    const declineAppWhatsappBtnEl = document.getElementById('declineAppWhatsappBtn');
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
    const decisionStatusEl = document.getElementById('whatsappDecisionStatus');
    const clearHistoryBtnEl = document.getElementById('clearDialogHistoryBtn');

    let expectedCaptchaAnswer = 0;
    let isCaptchaVerified = false;
<<<<<<< HEAD
    let selectedSubSubjects = [];

    function setSubjectDropdownOpen(isOpen) {
        if (!subjectMenuEl || !subjectDropdownToggleEl) return;
        subjectMenuEl.hidden = !isOpen;
        subjectDropdownToggleEl.setAttribute('aria-expanded', String(isOpen));
    }

    if (subjectDropdownToggleEl) {
        subjectDropdownToggleEl.addEventListener('click', () => {
            if (fieldsetEl && fieldsetEl.disabled) return;
            const currentlyOpen = subjectDropdownToggleEl.getAttribute('aria-expanded') === 'true';
            setSubjectDropdownOpen(!currentlyOpen);
        });
    }

    function updateSubSubjectHint() {
        if (!selectedSubSubjectHintEl) return;
        if (!selectedSubSubjects.length) {
            selectedSubSubjectHintEl.textContent = 'Seleccione al menos una opción dependiente del asunto.';
            selectedSubSubjectHintEl.classList.remove('has-selection');
        } else {
            selectedSubSubjectHintEl.textContent = `Opciones seleccionadas (${selectedSubSubjects.length}): ${selectedSubSubjects.join(' | ')}`;
            selectedSubSubjectHintEl.classList.add('has-selection');
        }
    }

    function renderSubSubjectBox(subjectValue) {
        selectedSubSubjects = [];
        const options = SUBSUBJECT_OPTIONS[subjectValue] || [];

        if (!subjectValue || !options.length || !subSubjectBoxEl || !subSubjectListEl) {
            if (subSubjectBoxEl) subSubjectBoxEl.hidden = true;
            if (subSubjectListEl) subSubjectListEl.innerHTML = '';
            updateSubSubjectHint();
            return;
        }

        if (subSubjectLabelEl) {
            subSubjectLabelEl.textContent = `Opciones de ${subjectValue} *`;
        }

        subSubjectListEl.innerHTML = '';
        options.forEach((optText, idx) => {
            const li = document.createElement('li');
            const label = document.createElement('label');
            label.className = 'subsubject-option';
            label.htmlFor = `subopt_${idx}`;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `subopt_${idx}`;
            checkbox.value = optText;

            const span = document.createElement('span');
            span.textContent = `- ${optText}`;

            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    if (!selectedSubSubjects.includes(optText)) {
                        selectedSubSubjects.push(optText);
                    }
                    label.classList.add('selected');
                } else {
                    selectedSubSubjects = selectedSubSubjects.filter(item => item !== optText);
                    label.classList.remove('selected');
                }
                updateSubSubjectHint();
            });

            label.appendChild(checkbox);
            label.appendChild(span);
            li.appendChild(label);
            subSubjectListEl.appendChild(li);
        });

        subSubjectBoxEl.hidden = false;
        updateSubSubjectHint();
    }

    function resetSubjectSelection() {
        if (subjectHiddenEl) subjectHiddenEl.value = '';
        if (subjectDropdownTextEl) {
            subjectDropdownTextEl.textContent = 'Seleccione una opción del menú de Derecho Informático';
        }
        setSubjectDropdownOpen(false);
        subjectItems.forEach(item => {
            item.classList.remove('selected');
            item.setAttribute('aria-selected', 'false');
        });
        if (selectedSubjectHintEl) {
            selectedSubjectHintEl.textContent = 'Haga clic para desplegar y elegir un asunto de Derecho Informático.';
            selectedSubjectHintEl.classList.remove('has-selection');
        }
        renderSubSubjectBox('');
    }

    function selectSubjectItem(targetItem) {
        const value = targetItem.getAttribute('data-value') || '';
        if (subjectHiddenEl) subjectHiddenEl.value = value;
        if (subjectDropdownTextEl) {
            subjectDropdownTextEl.textContent = value;
        }

        subjectItems.forEach(item => {
            const isMatch = item === targetItem;
            item.classList.toggle('selected', isMatch);
            item.setAttribute('aria-selected', String(isMatch));
        });

        if (selectedSubjectHintEl) {
            selectedSubjectHintEl.textContent = `Asunto seleccionado: ${value}`;
            selectedSubjectHintEl.classList.add('has-selection');
        }

        setSubjectDropdownOpen(false);
        renderSubSubjectBox(value);
    }

    subjectItems.forEach(item => {
        item.addEventListener('click', () => selectSubjectItem(item));
        item.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectSubjectItem(item);
            }
        });
    });
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625

    function buildResponseNotice(emitterWhatsapp) {
        return `En el plazo de 24 horas, Ud. recibirá la respuesta de su solicitud al WhatsApp registrado (${emitterWhatsapp}).`;
    }

    function generateCaptcha() {
        const a = Math.floor(Math.random() * 8) + 2;
        const b = Math.floor(Math.random() * 8) + 1;
        expectedCaptchaAnswer = a + b;
        isCaptchaVerified = false;

        if (captchaQuestionEl) {
            captchaQuestionEl.textContent = `¿Cuánto es ${a} + ${b}?`;
        }
        if (captchaInputEl) {
            captchaInputEl.value = '';
            captchaInputEl.disabled = false;
        }
        if (fieldsetEl) {
            fieldsetEl.disabled = true;
        }
<<<<<<< HEAD
        setSubjectDropdownOpen(false);
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
        if (captchaStatusEl) {
            captchaStatusEl.textContent = 'Resuelva y valide el CAPTCHA para habilitar el formulario.';
            captchaStatusEl.className = 'captcha-status locked';
        }
    }

    function validateCaptcha() {
        if (!captchaInputEl) return;
        const typed = Number(captchaInputEl.value.trim());
        if (!Number.isNaN(typed) && typed === expectedCaptchaAnswer) {
            isCaptchaVerified = true;
            if (fieldsetEl) fieldsetEl.disabled = false;
            if (captchaInputEl) captchaInputEl.disabled = true;
            if (captchaStatusEl) {
                captchaStatusEl.textContent = 'CAPTCHA validado. Ya puede ingresar los datos del formulario.';
                captchaStatusEl.className = 'captcha-status unlocked';
            }
        } else {
            isCaptchaVerified = false;
            if (fieldsetEl) fieldsetEl.disabled = true;
<<<<<<< HEAD
            setSubjectDropdownOpen(false);
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
            if (captchaStatusEl) {
                captchaStatusEl.textContent = 'Respuesta incorrecta. Intente nuevamente o genere un nuevo CAPTCHA.';
                captchaStatusEl.className = 'captcha-status locked';
            }
        }
    }

    if (verifyCaptchaBtnEl) {
        verifyCaptchaBtnEl.addEventListener('click', validateCaptcha);
    }

    if (captchaInputEl) {
        captchaInputEl.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                validateCaptcha();
            }
        });
    }

    if (refreshCaptchaBtnEl) {
        refreshCaptchaBtnEl.addEventListener('click', generateCaptcha);
    }

    function updateCharCounter() {
        if (!dialogContentEl || !charCounterEl) return;
        if (dialogContentEl.value.length > MAX_DIALOG_CHARS) {
            dialogContentEl.value = dialogContentEl.value.slice(0, MAX_DIALOG_CHARS);
        }
        const len = dialogContentEl.value.length;
        charCounterEl.textContent = `${len} / ${MAX_DIALOG_CHARS}`;
        charCounterEl.classList.toggle('limit-near', len >= MAX_DIALOG_CHARS - 25);
    }

    if (dialogContentEl) {
        dialogContentEl.addEventListener('input', updateCharCounter);
    }

    function formatNow() {
        const d = new Date();
        const pad = n => String(n).padStart(2, '0');
        return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }

    function updateClock() {
        if (liveClockEl) {
            liveClockEl.textContent = `Fecha y hora actual: ${formatNow()}`;
        }
    }

    updateClock();
    setInterval(updateClock, 1000);

    function loadEntries() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (err) {
            return [];
        }
    }

    function saveEntries(entries) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }

    let entries = loadEntries();
    let latestRecord = entries.length ? entries[entries.length - 1] : null;

    function buildSlug(titleText) {
        return (titleText || 'formulario-derecho-informatico')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
            .slice(0, 40) || 'registro';
    }

<<<<<<< HEAD
    function formatSubSubjectsForDisplay(subList) {
        return Array.isArray(subList) && subList.length
            ? subList.map(s => `- ${s}`).join(' | ')
            : 'No especificada';
    }

    function buildFormFileContent(item, index) {
        const subLines = Array.isArray(item.subSubjects) && item.subSubjects.length
            ? item.subSubjects.map(s => `  - ${s}`).join('\n')
            : '  - No especificada';

=======
    function buildFormFileContent(item, index) {
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
        return [
            '================================================================',
            `FORMULARIO DE DIÁLOGO — DERECHO INFORMÁTICO (REGISTRO #${index + 1})`,
            '================================================================',
            `Fecha y hora         : ${item.dateTime}`,
            `Título del diálogo   : ${item.dialogTitle}`,
            `Asunto               : ${item.subject}`,
<<<<<<< HEAD
            'Opciones del asunto  :',
            subLines,
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
            `Emisor               : ${item.userName}`,
            `WhatsApp del emisor  : ${item.userWhatsapp}`,
            `Correo electrónico   : ${item.userEmail}`,
            `Organización         : ${item.userCompany || 'No especificada'}`,
            '----------------------------------------------------------------',
            'Contenido del diálogo:',
            item.dialogContent,
            '----------------------------------------------------------------',
            `Aviso de respuesta   : ${item.notice}`,
            '================================================================'
        ].join('\n');
    }

    function buildFullHistoryFormContent(allRecords) {
        return allRecords.map((item, idx) => buildFormFileContent(item, idx)).join('\n\n');
    }

    function downloadFormFile(allRecords, lastItem) {
        const content = buildFullHistoryFormContent(allRecords);
        const safeSlug = buildSlug(lastItem.dialogTitle);

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `formulario-dialogo-${safeSlug}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function buildAppWhatsappUrl(item) {
<<<<<<< HEAD
        const subText = formatSubSubjectsForDisplay(item.subSubjects);
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
        const msg =
            `FORMULARIO DERECHO INFORMÁTICO\n` +
            `Fecha y hora: ${item.dateTime}\n` +
            `Título: ${item.dialogTitle}\n` +
            `Asunto: ${item.subject}\n` +
<<<<<<< HEAD
            `Opciones elegidas: ${subText}\n` +
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
            `Emisor: ${item.userName} (WhatsApp: ${item.userWhatsapp} | Correo: ${item.userEmail})\n` +
            `Organización: ${item.userCompany || 'No especificada'}\n` +
            `Contenido: ${item.dialogContent}\n` +
            `Respuesta en 24 h al WhatsApp del emisor (${item.userWhatsapp}).`;
        return `https://wa.me/${APP_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    }

    function renderDialogMessages() {
        if (!messagesEl) return;
        messagesEl.innerHTML = '';

        if (!entries.length) {
            const welcome = document.createElement('div');
            welcome.className = 'd-msg admin';
            welcome.innerHTML =
                '<div class="d-msg-meta">Cuadro de diálogo</div>' +
                '<div>Lea el aviso sobre el CAPTCHA, valide la suma y complete el formulario exclusivo de Derecho Informático.</div>';
            messagesEl.appendChild(welcome);
            if (decisionBoxEl) decisionBoxEl.hidden = true;
            return;
        }

        entries.forEach(item => {
            const clientBox = document.createElement('div');
            clientBox.className = 'd-msg client';

            const meta = document.createElement('div');
            meta.className = 'd-msg-meta';
            meta.textContent = `${item.userName} • ${item.dateTime} • ${item.subject}`;

            const body = document.createElement('div');
            body.textContent =
<<<<<<< HEAD
                `Opciones del asunto: ${formatSubSubjectsForDisplay(item.subSubjects)}\n` +
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
                `Título del diálogo: ${item.dialogTitle}\n` +
                `WhatsApp del emisor: ${item.userWhatsapp}\n` +
                `Contenido: ${item.dialogContent}`;

            clientBox.appendChild(meta);
            clientBox.appendChild(body);
            messagesEl.appendChild(clientBox);

            const adminBox = document.createElement('div');
            adminBox.className = 'd-msg admin';

            const adminMeta = document.createElement('div');
            adminMeta.className = 'd-msg-meta';
            adminMeta.textContent = `Registro completado • ${item.dateTime}`;

            const adminBody = document.createElement('div');
            adminBody.textContent = item.notice;

            adminBox.appendChild(adminMeta);
            adminBox.appendChild(adminBody);
            messagesEl.appendChild(adminBox);
        });

        messagesEl.scrollTop = messagesEl.scrollHeight;

        if (latestRecord && decisionBoxEl && sendAppWhatsappBtnEl) {
            decisionBoxEl.hidden = false;
            sendAppWhatsappBtnEl.href = buildAppWhatsappUrl(latestRecord);
            if (decisionStatusEl) {
<<<<<<< HEAD
                decisionStatusEl.textContent = latestRecord.whatsappChoice || 'Archivo .txt descargado automáticamente en su PC. Puede enviarlo al WhatsApp +59170617170 si lo desea.';
=======
                decisionStatusEl.textContent = latestRecord.whatsappChoice || 'Archivo guardado en su PC. Elija si desea enviarlo al WhatsApp +59170617170.';
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
            }
        }
    }

    if (formEl) {
        formEl.addEventListener('submit', e => {
            e.preventDefault();

            if (!isCaptchaVerified) {
                validateCaptcha();
                if (!isCaptchaVerified) return;
            }

            const userName = document.getElementById('userName')?.value.trim() || '';
            const userWhatsapp = document.getElementById('userWhatsapp')?.value.trim() || '';
            const userEmail = document.getElementById('userEmail')?.value.trim() || '';
            const userCompany = document.getElementById('userCompany')?.value.trim() || '';
<<<<<<< HEAD
            const subject = subjectHiddenEl?.value.trim() || '';
=======
            const subject = document.getElementById('dialogSubject')?.value.trim() || '';
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
            const dialogTitle = document.getElementById('dialogTitle')?.value.trim() || '';
            const dialogContentRaw = document.getElementById('dialogContent')?.value.trim() || '';
            const dialogContent = dialogContentRaw.slice(0, MAX_DIALOG_CHARS);

<<<<<<< HEAD
            if (!subject) {
                setSubjectDropdownOpen(true);
                if (selectedSubjectHintEl) {
                    selectedSubjectHintEl.textContent = 'Por favor, despliegue y elija un asunto del menú de Derecho Informático.';
                    selectedSubjectHintEl.classList.remove('has-selection');
                }
                return;
            }

            if (!selectedSubSubjects.length) {
                if (selectedSubSubjectHintEl) {
                    selectedSubSubjectHintEl.textContent = 'Por favor, seleccione al menos una opción dependiente del asunto.';
                    selectedSubSubjectHintEl.classList.remove('has-selection');
                }
                return;
            }

            if (!userName || !userWhatsapp || !userEmail || !dialogTitle || !dialogContent) {
=======
            if (!userName || !userWhatsapp || !userEmail || !subject || !dialogTitle || !dialogContent) {
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
                return;
            }

            const dateTime = formatNow();
            const notice = buildResponseNotice(userWhatsapp);

            const record = {
                dateTime,
                userName,
                userWhatsapp,
                userEmail,
                userCompany,
                subject,
<<<<<<< HEAD
                subSubjects: [...selectedSubSubjects],
                dialogTitle,
                dialogContent,
                notice,
                whatsappChoice: 'Archivo .txt descargado automáticamente en su PC. Si lo desea, envíe el formulario al WhatsApp +59170617170.'
=======
                dialogTitle,
                dialogContent,
                notice,
                whatsappChoice: 'Archivo descargado en su PC. Usted decide si envía el formulario al WhatsApp +59170617170.'
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
            };

            entries.push(record);
            latestRecord = record;
            saveEntries(entries);
            renderDialogMessages();
            downloadFormFile(entries, record);

            formEl.reset();
<<<<<<< HEAD
            resetSubjectSelection();
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
            updateCharCounter();
            generateCaptcha();
        });
    }

<<<<<<< HEAD
=======
    if (downloadBtnEl) {
        downloadBtnEl.addEventListener('click', () => {
            if (latestRecord && entries.length) {
                downloadFormFile(entries, latestRecord);
            }
        });
    }

>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
    if (sendAppWhatsappBtnEl) {
        sendAppWhatsappBtnEl.addEventListener('click', () => {
            if (latestRecord) {
                latestRecord.whatsappChoice = `Usted optó por abrir WhatsApp hacia +${APP_WHATSAPP} con el formulario.`;
                saveEntries(entries);
                if (decisionStatusEl) {
                    decisionStatusEl.textContent = latestRecord.whatsappChoice;
                }
            }
        });
    }

<<<<<<< HEAD
=======
    if (declineAppWhatsappBtnEl) {
        declineAppWhatsappBtnEl.addEventListener('click', () => {
            if (latestRecord) {
                latestRecord.whatsappChoice = 'Usted decidió no enviar el formulario al WhatsApp de la aplicación; su archivo quedó descargado en su PC.';
                saveEntries(entries);
                if (decisionStatusEl) {
                    decisionStatusEl.textContent = latestRecord.whatsappChoice;
                }
            }
        });
    }

>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
    if (clearHistoryBtnEl) {
        clearHistoryBtnEl.addEventListener('click', () => {
            entries = [];
            latestRecord = null;
            saveEntries(entries);
            renderDialogMessages();
        });
    }

<<<<<<< HEAD
    resetSubjectSelection();
=======
>>>>>>> 4ebeffd9907a3bfe36d7511572a4fafa06914625
    generateCaptcha();
    updateCharCounter();
    renderDialogMessages();
});