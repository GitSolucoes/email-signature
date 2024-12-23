

document.addEventListener("DOMContentLoaded", () => {

    // Set the positions equivalent to the name
    const positions = {
        alessandra_faria: "CEO & Fundadora",
        anthony_oliveira: "Analista de Backoffice Pleno",
        camila_ataide: "Coordenadora de Vendas Sênior",
        felipe_marchezini: "Consultor de Vendas Júnior",
        geovanna_emanuelly: "Consultor de Vendas Júnior",
        gustavo_barbosa: "Head de Operações",
        gustavo_inacio: "Consultor de Vendas Júnior",
        ian_henrique: "Consultor de Vendas Júnior",
        italo_brito: "Consultor de Vendas Júnior",
        jessica_hellen: "Consultor de Vendas Júnior",
        joao_fontes: "Assistente de Backoffice Sênior",
        juan_brito: "Analista de Backoffice Júnior",
        laisa_reis: "Consultor de Vendas Júnior",
        marta_muniz: "Auxiliar de Serviços Gerais",
        rafael_bruce: "Analista de Backoffice Pleno",
        rafael_dos_santos: "Assistente de Backoffice Sênior",
        raquel_andrade: "Coordenadora Júnior",
        rogerio_dias: "Estagiário de Desenvolvimento Sênior",
        sabrina_martinuzzo: "Consultor de Vendas Júnior",
        samuel_araujo: "Estagiário de Desenvolvimento Pleno",
        taynara_francine: "Desenvolvedor Júnior",
        tiago_martins: "Consultor de Vendas Júnior",
        vinicius_souza: "Estagiário de Desenvolvimento Júnior"
    };

    // Set variables with the inputed data
    const nameElement = document.getElementById('name');
    const telElement = document.getElementById('tel');
    const emailElement = document.getElementById('email');
    const positionElement = document.getElementById('position');
    const sendButton = document.getElementById('btn-send');
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modal-name');
    const modalTel = document.getElementById('modal-tel');
    const modalEmail = document.getElementById('modal-email');
    const modalPosition = document.getElementById('modal-position');
    const modalBtnConfirm = document.getElementById('confirm-btn');
    const modalBtnCancel = document.getElementById('cancel-btn');

    // Find the position equivalent to the name
    nameElement.addEventListener('change', (event) => {
        selectedName = event.target.value;
        const position = positions[selectedName] || "Cargo não encontrado";
        positionElement.textContent = position;
    });

    // Format the telephone input
    telElement.addEventListener('input', () =>{
        let tel = telElement.value.replace(/\D/g, "");

        if (tel.length > 0) tel = `+${tel}`;
        if (tel.length > 3) tel = `${tel.slice(0, 3)}(${tel.slice(3)}`;
        if (tel.length > 6) tel = `${tel.slice(0, 6)})${tel.slice(6)}`;
        if (tel.length > 11) tel = `${tel.slice(0, 12)}-${tel.slice(12, 16)}`;

        telElement.value = tel;
    });

    // Blocks the user from inputting '@'
    emailElement.addEventListener('input', (event) => {
        const currentValue = event.target.value;
        if (currentValue.includes('@')) {
            event.target.value = currentValue.replace(/@/g, '');
            alert("Insira somente a primeira parte do seu email!");
        }
    });

    // Sets the opening of modal when the send-btn is clicked
    sendButton.addEventListener('click', (event) =>{
        event.preventDefault();

        if (!nameElement.value){
            alert("Insira seu nome!");
        } else if (!telElement.value || telElement.value.length < 16){
            alert("Insira um telefone válido!");
        } else if (!emailElement.value){
            alert("Insira seu email!");
        } else{
            modalName.textContent = nameElement.options[nameElement.selectedIndex].text;
            modalTel.textContent = telElement.value;
            modalEmail.textContent = emailElement.value + "@solucoesmg.com.br";
            modalPosition.textContent = positionElement.textContent;

            modal.style.display = 'flex';
        }
    });

    modalBtnConfirm.addEventListener('click', () =>{
        modal.style.display = 'none';

        collaboratorName = nameElement.options[nameElement.selectedIndex].text;
        collaboratorEmail = emailElement.value + "@solucoesmg.com.br";
        collaboratorTel = telElement.value;
        collaboratorPosition = positionElement.textContent;

        localStorage.setItem('name', collaboratorName);
        localStorage.setItem('email', collaboratorEmail);
        localStorage.setItem('tel', collaboratorTel);
        localStorage.setItem('position', collaboratorPosition);

        window.location.href = 'signature.html'
    });

    modalBtnCancel.addEventListener('click', () =>{
        modal.style.display = 'none';
    });

});