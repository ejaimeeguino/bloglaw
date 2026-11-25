document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    const STORAGE_KEY = 'pytli_dialog_history_v4';
    const APP_WHATSAPP = '59170617170';
    const MAX_DIALOG_CHARS = 250;

=======
>>>>>>> 3419b75a9f9573d9232532bbcad2987565e2817e
    // 1. Menú hamburguesa para smartphones
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

<<<<<<< HEAD
=======
        // Cerrar menú automáticamente al hacer clic en cualquier opción
>>>>>>> 3419b75a9f9573d9232532bbcad2987565e2817e
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

    // 4. Cuadro de diálogo (Derecho Informático)
    const liveClockEl = document.getElementById('dialogLiveClock');
    const captchaQuestionEl = document.getElementById('captchaQuestion');
    const captchaInputEl = document.getElementById('captchaInput');
    const verifyCaptchaBtnEl = document.getElementById('verifyCaptchaBtn');
    const refreshCaptchaBtnEl = document.getElementById('refreshCaptchaBtn');
    const captchaStatusEl = document.getElementById('captchaStatus');
    const fieldsetEl = document.getElementById('dialogFieldsFieldset');
    const formEl = document.getElementById('adminDialogForm');
    const dialogContentEl = document.getElementById('dialogContent');
    const charCounterEl = document.getElementById('dialogCharCounter');
    const messagesEl = document.getElementById('dialogMessages');
    const decisionBoxEl = document.getElementById('dialogDecisionBox');
    const downloadBtnEl = document.getElementById('downloadLastFileBtn');
    const sendAppWhatsappBtnEl = document.getElementById('sendAppWhatsappBtn');
    const declineAppWhatsappBtnEl = document.getElementById('declineAppWhatsappBtn');
    const decisionStatusEl = document.getElementById('whatsappDecisionStatus');
    const clearHistoryBtnEl = document.getElementById('clearDialogHistoryBtn');

    let expectedCaptchaAnswer = 0;
    let isCaptchaVerified = false;

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

    function buildFormFileContent(item, index) {
        return [
            '================================================================',
            `FORMULARIO DE DIÁLOGO — DERECHO INFORMÁTICO (REGISTRO #${index + 1})`,
            '================================================================',
            `Fecha y hora         : ${item.dateTime}`,
            `Título del diálogo   : ${item.dialogTitle}`,
            `Asunto               : ${item.subject}`,
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
        const msg =
            `FORMULARIO DERECHO INFORMÁTICO\n` +
            `Fecha y hora: ${item.dateTime}\n` +
            `Título: ${item.dialogTitle}\n` +
            `Asunto: ${item.subject}\n` +
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
                decisionStatusEl.textContent = latestRecord.whatsappChoice || 'Archivo guardado en su PC. Elija si desea enviarlo al WhatsApp +59170617170.';
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
            const subject = document.getElementById('dialogSubject')?.value.trim() || '';
            const dialogTitle = document.getElementById('dialogTitle')?.value.trim() || '';
            const dialogContentRaw = document.getElementById('dialogContent')?.value.trim() || '';
            const dialogContent = dialogContentRaw.slice(0, MAX_DIALOG_CHARS);

            if (!userName || !userWhatsapp || !userEmail || !subject || !dialogTitle || !dialogContent) {
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
                dialogTitle,
                dialogContent,
                notice,
                whatsappChoice: 'Archivo descargado en su PC. Usted decide si envía el formulario al WhatsApp +59170617170.'
            };

            entries.push(record);
            latestRecord = record;
            saveEntries(entries);
            renderDialogMessages();
            downloadFormFile(entries, record);

            formEl.reset();
            updateCharCounter();
            generateCaptcha();
        });
    }

    if (downloadBtnEl) {
        downloadBtnEl.addEventListener('click', () => {
            if (latestRecord && entries.length) {
                downloadFormFile(entries, latestRecord);
            }
        });
    }

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

    if (clearHistoryBtnEl) {
        clearHistoryBtnEl.addEventListener('click', () => {
            entries = [];
            latestRecord = null;
            saveEntries(entries);
            renderDialogMessages();
        });
    }

    generateCaptcha();
    updateCharCounter();
    renderDialogMessages();
=======
>>>>>>> 3419b75a9f9573d9232532bbcad2987565e2817e
});