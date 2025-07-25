document.addEventListener('DOMContentLoaded', () => {
    // Definición de los cursos organizados por ciclos
    const courses = {
        'Ciclo 1': [
            'Observación del comportamiento',
            'Introducción a la psicología',
            'Inglés I',
            'Individuo y medio ambiente',
            'Comprensión y redacción de textos I',
            'Introducción a la vida universitaria (ivu)'
        ],
        'Ciclo 2': [
            'Observación y entrevista',
            'Tecnologías del aprendizaje',
            'Bases biológicas del comportamiento',
            'Inglés II',
            'Comprensión y redacción de textos II',
            'Psicología del desarrollo I'
        ],
        'Ciclo 3': [
            'Psicología experimental',
            'Neuropsicología',
            'Personalidad',
            'Inglés III',
            'Problemas y desafíos en el perú actual',
            'Psicología del desarrollo II'
        ],
        'Ciclo 4': [
            'Psicopatología',
            'Estadística descriptiva para psicología',
            'Ciudadanía y reflexión ética',
            'Inglés IV',
            'Psicología social - comunitaria',
            'Pruebas psicométricas'
        ],
        'Ciclo 5': [
            'Motivación y emoción',
            'Pruebas proyectivas',
            'Curso integrador I: portafolio I',
            'Estadística inferencial para psicología',
            'Investigación académica',
            'Psicología de la sexualidad'
        ],
        'Ciclo 6': [
            'Psicología cultural',
            'Construcción de pruebas psicológicas',
            'Dinámica de grupos',
            'Psicología educativa',
            'Diagnostico diferencial',
            'Psicología de las organizaciones'
        ],
        'Ciclo 7': [
            'Diagnostico vocacional y educacional',
            'Creatividad e innovación',
            'Dificultades del aprendizaje',
            'Técnicas psicoterapéuticas',
            'Gestión humana en las organizaciones',
            'Psicología forense'
        ],
        'Ciclo 8': [
            'Salud mental y rehabilitacion social',
            'Formación para la investigación en psicología',
            'Curso integrador II: portafolio II',
            'Intervención psicoeducativa',
            'Ética en psicología',
            'Diagnóstico y desarrollo organizacional'
        ],
        'Ciclo 9': [
            'Consultoría en organizaciones',
            'Investigación aplicada a la psicología',
            'Internado I -psicología'
        ],
        'Ciclo 10': [
            'Internado II -psicología',
            'Taller de investigación - psicología',
            'Formación para la empleabilidad'
        ]
    };

    // Definición de los requisitos de los cursos
    const requirements = {
        'Observación y entrevista': ['Observación del comportamiento'],
        'Bases biológicas del comportamiento': ['Introducción a la vida universitaria (ivu)'],
        'Inglés II': ['Inglés I'],
        'Comprensión y redacción de textos II': ['Comprensión y redacción de textos I'],
        'Psicología experimental': ['Observación y entrevista', 'Introducción a la vida universitaria (ivu)'],
        'Neuropsicología': ['Bases biológicas del comportamiento'],
        'Personalidad': ['Observación y entrevista'],
        'Inglés III': ['Inglés II'],
        'Problemas y desafíos en el perú actual': ['Individuo y medio ambiente', 'Comprensión y redacción de textos I'],
        'Psicología del desarrollo II': ['Psicología del desarrollo I'],
        'Psicopatología': ['Personalidad', 'Neuropsicología', 'Psicología del desarrollo II'],
        'Estadística descriptiva para psicología': ['Tecnologías del aprendizaje'], // Asumo que "Nivelación de matemática-humanidades" no es un curso listado, si lo es, habría que añadirlo a `courses`
        'Ciudadanía y reflexión ética': ['Individuo y medio ambiente', 'Comprensión y redacción de textos I'],
        'Inglés IV': ['Inglés III'],
        'Psicología social - comunitaria': ['Personalidad', 'Psicología del desarrollo II'],
        'Pruebas psicométricas': ['Personalidad', 'Psicología del desarrollo II'],
        'Motivación y emoción': ['Personalidad'],
        'Pruebas proyectivas': ['Personalidad', 'Psicología del desarrollo II'],
        'Curso integrador I: portafolio I': ['Psicopatología', 'Psicología social - comunitaria'],
        'Estadística inferencial para psicología': ['Estadística descriptiva para psicología'],
        'Investigación académica': ['Individuo y medio ambiente', 'Comprensión y redacción de textos I'],
        'Psicología de la sexualidad': ['Psicología social - comunitaria', 'Psicología del desarrollo II'],
        'Psicología cultural': ['Psicología social - comunitaria'],
        'Construcción de pruebas psicológicas': ['Estadística inferencial para psicología', 'Pruebas proyectivas'],
        'Dinámica de grupos': ['Psicología social - comunitaria'],
        'Psicología educativa': ['Curso integrador I: portafolio I'],
        'Diagnostico diferencial': ['Psicopatología'],
        'Psicología de las organizaciones': ['Motivación y emoción', 'Psicología social - comunitaria'],
        'Diagnostico vocacional y educacional': ['Pruebas proyectivas'],
        'Creatividad e innovación': ['Motivación y emoción'],
        'Dificultades del aprendizaje': ['Psicología educativa'],
        'Técnicas psicoterapéuticas': ['Diagnostico diferencial'],
        'Gestión humana en las organizaciones': ['Psicología de las organizaciones', 'Pruebas proyectivas'],
        'Psicología forense': ['Psicopatología'],
        'Salud mental y rehabilitacion social': ['Diagnostico diferencial', 'Psicología social - comunitaria'],
        'Formación para la investigación en psicología': ['Estadística inferencial para psicología', 'Inglés I', 'Investigación académica', 'Construcción de pruebas psicológicas'],
        'Curso integrador II: portafolio II': ['Técnicas psicoterapéuticas', 'Dinámica de grupos', 'Curso integrador I: portafolio I', 'Dificultades del aprendizaje', 'Construcción de pruebas psicológicas'],
        'Intervención psicoeducativa': ['Dificultades del aprendizaje'],
        'Ética en psicología': ['Diagnostico diferencial', 'Ciudadanía y reflexión ética'],
        'Diagnóstico y desarrollo organizacional': ['Gestión humana en las organizaciones'],
        'Consultoría en organizaciones': ['Diagnóstico y desarrollo organizacional'],
        'Investigación aplicada a la psicología': ['Formación para la investigación en psicología'],
        'Internado I -psicología': [
            'Formación para la investigación en psicología',
            'Técnicas psicoterapéuticas',
            'Ética en psicología',
            'Curso integrador II: portafolio II',
            'Intervención psicoeducativa',
            'Diagnóstico y desarrollo organizacional',
            'Salud mental y rehabilitacion social'
        ],
        'Internado II -psicología': ['Internado I -psicología'],
        'Taller de investigación - psicología': ['Investigación aplicada a la psicología'],
        'Formación para la empleabilidad': ['Gestión humana en las organizaciones']
    };

    // Objeto para almacenar el estado de los cursos aprobados
    let approvedCourses = {};

    // Elementos del DOM
    const curriculumGrid = document.getElementById('curriculum-grid');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeButton = document.querySelector('.close-button');

    /**
     * Carga el estado de los cursos aprobados desde el almacenamiento local.
     */
    const loadApprovedCourses = () => {
        const storedApprovedCourses = localStorage.getItem('approvedCourses');
        if (storedApprovedCourses) {
            approvedCourses = JSON.parse(storedApprovedCourses);
        }
    };

    /**
     * Guarda el estado actual de los cursos aprobados en el almacenamiento local.
     */
    const saveApprovedCourses = () => {
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
    };

    /**
     * Verifica si un curso tiene todos sus requisitos cumplidos.
     * @param {string} courseName - El nombre del curso a verificar.
     * @returns {boolean} - True si todos los requisitos están cumplidos, False en caso contrario.
     */
    const areRequirementsMet = (courseName) => {
        const courseRequirements = requirements[courseName];
        if (!courseRequirements || courseRequirements.length === 0) {
            return true; // No tiene requisitos, se puede aprobar
        }

        // Verifica si todos los requisitos están en la lista de cursos aprobados
        return courseRequirements.every(req => approvedCourses[req]);
    };

    /**
     * Obtiene los requisitos faltantes para un curso.
     * @param {string} courseName - El nombre del curso.
     * @returns {Array<string>} - Una lista de los cursos requisitos que faltan por aprobar.
     */
    const getMissingRequirements = (courseName) => {
        const courseRequirements = requirements[courseName];
        if (!courseRequirements) {
            return [];
        }
        return courseRequirements.filter(req => !approvedCourses[req]);
    };

    /**
     * Muestra un mensaje en el modal.
     * @param {string} message - El mensaje a mostrar.
     */
    const showModal = (message) => {
        modalMessage.innerHTML = message;
        modal.style.display = 'flex'; // Usar flex para centrar el contenido
    };

    /**
     * Oculta el modal.
     */
    const hideModal = () => {
        modal.style.display = 'none';
    };

    /**
     * Renderiza la malla curricular en el DOM.
     * Actualiza las clases 'approved' y 'blocked' según el estado.
     */
    const renderCurriculum = () => {
        curriculumGrid.innerHTML = ''; // Limpia el contenido previo

        for (const semesterName in courses) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');

            const semesterTitle = document.createElement('h2');
            semesterTitle.textContent = semesterName;
            semesterDiv.appendChild(semesterTitle);

            const courseListDiv = document.createElement('div');
            courseListDiv.classList.add('course-list');

            courses[semesterName].forEach(courseName => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');
                courseDiv.textContent = courseName;
                courseDiv.dataset.courseName = courseName; // Guarda el nombre del curso en un atributo de datos

                // Aplica la clase 'approved' si el curso ya está aprobado
                if (approvedCourses[courseName]) {
                    courseDiv.classList.add('approved');
                } else {
                    // Si no está aprobado, verifica si está bloqueado y aplica la clase 'blocked'
                    if (!areRequirementsMet(courseName)) {
                        courseDiv.classList.add('blocked');
                    }
                }

                // Añade el evento de clic para marcar/desmarcar
                courseDiv.addEventListener('click', () => toggleCourseStatus(courseName, courseDiv));
                courseListDiv.appendChild(courseDiv);
            });

            semesterDiv.appendChild(courseListDiv);
            curriculumGrid.appendChild(semesterDiv);
        }
    };

    /**
     * Alterna el estado de un curso (aprobado/no aprobado).
     * @param {string} courseName - El nombre del curso.
     * @param {HTMLElement} courseDiv - El elemento DIV del curso en el DOM.
     */
    const toggleCourseStatus = (courseName, courseDiv) => {
        if (approvedCourses[courseName]) {
            // Si el curso ya está aprobado, se puede desaprobar
            delete approvedCourses[courseName];
            saveApprovedCourses();
            renderCurriculum(); // Vuelve a renderizar para actualizar el estado de todos los cursos
        } else {
            // Si el curso no está aprobado, intenta aprobarlo
            if (areRequirementsMet(courseName)) {
                approvedCourses[courseName] = true;
                saveApprovedCourses();
                renderCurriculum(); // Vuelve a renderizar para actualizar el estado de todos los cursos
            } else {
                const missing = getMissingRequirements(courseName);
                const message = `Para aprobar "${courseName}", necesitas aprobar primero: <ul>${missing.map(req => `<li>${req}</li>`).join('')}</ul>`;
                showModal(message);
            }
        }
    };

    // Event listeners para el modal
    closeButton.addEventListener('click', hideModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    // Inicialización al cargar la página
    loadApprovedCourses();
    renderCurriculum();
});
