document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscriptionForm');
    const successMessage = document.getElementById('successMessage');
    const collectedDataList = document.getElementById('collectedDataList');
    const container = document.querySelector('.container');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Detiene el envío del formulario por defecto

        // 1. Recopilar Datos
        const formData = new FormData(form);
        const data = {};
        
        // Recopila campos de texto (Email y Nombre)
        data.email = formData.get('email');
        data.nombre = formData.get('nombre') || 'No especificado';
        data.aceptoPolitica = formData.get('acepto') ? 'Sí' : 'No';

        // Recopila intereses (Checkboxes)
        const interesesSeleccionados = [];
        const checkboxes = form.querySelectorAll('input[name="intereses"]:checked');
        checkboxes.forEach(checkbox => {
            interesesSeleccionados.push(checkbox.value);
        });
        data.intereses = interesesSeleccionados.length > 0 ? interesesSeleccionados.join(', ') : 'Ninguno';

        // 2. Mostrar Datos en Consola (Simulación de envío)
        console.log('--- Datos de Suscripción Recopilados ---');
        console.log('Email:', data.email);
        console.log('Nombre:', data.nombre);
        console.log('Intereses:', data.intereses);
        console.log('Aceptó Política/Promociones:', data.aceptoPolitica);
        console.log('----------------------------------------');

        // 3. Ocultar Formulario y Mostrar Mensaje de Éxito
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');

        // 4. Mostrar Datos en la Tarjeta de Éxito
        collectedDataList.innerHTML = `
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Nombre:</strong> ${data.nombre}</li>
            <li><strong>Intereses:</strong> ${data.intereses}</li>
            <li><strong>Aceptó Políticas:</strong> ${data.aceptoPolitica}</li>
        `;

        // Opcional: ajustar la altura del contenedor si el mensaje de éxito es más pequeño/grande
        container.style.padding = '10px';
    });
});