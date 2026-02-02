// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // === INTERAÇÃO 1: Botão Explorar Destinos ===
    const btnExplorar = document.getElementById('btn-explorar');
    
    btnExplorar.addEventListener('click', function() {
        // Scroll suave para a seção de Ubatuba
        document.getElementById('ubatuba').scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        // Alerta de boas-vindas
        setTimeout(() => {
            alert('Bem-vindo às minhas aventuras! Prepare-se para conhecer lugares incríveis!');
        }, 800);
    });

    // === INTERAÇÃO 2: Contador de Fotos na Galeria ===
    const btnContador = document.getElementById('btn-contador');
    const contadorTexto = document.getElementById('contador-fotos');
    let contadorAtivo = false;
    
    btnContador.addEventListener('click', function() {
        if (!contadorAtivo) {
            const totalFotos = document.querySelectorAll('.galeria-item').length;
            contadorTexto.innerHTML = `<i class="fas fa-camera"></i> Total de ${totalFotos} fotos incríveis na galeria!`;
            contadorTexto.style.display = 'block';
            btnContador.textContent = 'Ocultar Contador';
            contadorAtivo = true;
            
            // Animação de fadeIn
            contadorTexto.style.opacity = '0';
            setTimeout(() => {
                contadorTexto.style.transition = 'opacity 0.5s ease';
                contadorTexto.style.opacity = '1';
            }, 100);
        } else {
            contadorTexto.style.display = 'none';
            btnContador.textContent = 'Mostrar Contador de Fotos';
            contadorAtivo = false;
        }
    });

    // === INTERAÇÃO 3: Botões "Ver Mais Fotos" ===
    window.mostrarMensagem = function(destino) {
        if (destino === 'ubatuba') {
            alert('Ubatuba foi incrível!\n\n' +
                  'Viagem em Família:\n' +
                  'Visitei mais de 15 praias diferentes com minha família, cada uma com sua beleza única.\n' +
                  'Momentos inesquecíveis de diversão, relaxamento e união familiar.\n\n' +
                  'As águas cristalinas e a Mata Atlântica fazem desse lugar um verdadeiro paraíso!');
        } else if (destino === 'epitacio') {
            alert('Presidente Epitácio surpreendeu!\n\n' +
                  'Treinamento SESI - Equipe de Robótica:\n' +
                  'Viagem incrível com minha equipe de robótica pelo SESI.\n' +
                  'Dias intensos de aprendizado, programação e trabalho em equipe.\n\n' +
                  'Os pores do sol no Rio Paraná são inesquecíveis.\n' +
                  'A experiência fortaleceu nossos laços e nos preparou para os desafios!');
        }
    };

    // === INTERAÇÃO 4: Botão de Contato ===
    const btnContato = document.getElementById('btn-contato');
    
    btnContato.addEventListener('click', function() {
        const nome = prompt('Digite seu nome:');
        
        if (nome) {
            alert(`Olá, ${nome}!\n\n` +
                  'Obrigado pelo interesse! Em breve estarei compartilhando mais fotos e dicas desses destinos incríveis.\n\n' +
                  'Fique atento para novas atualizações!');
        }
    });

    // === INTERAÇÃO 5: Mudança de cor do header ao rolar ===
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#1f5c87';
        } else {
            header.style.backgroundColor = '#2874a6';
        }
    });

    // === INTERAÇÃO 6: Efeito nos links da navegação ===
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // === INTERAÇÃO 7: Destaque nas imagens da galeria ===
    const galeriaItens = document.querySelectorAll('.galeria-item');
    
    galeriaItens.forEach(item => {
        item.addEventListener('click', function() {
            const local = this.querySelector('.overlay p').textContent;
            
            // Cria um efeito de "flash" ao clicar
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            console.log(`Foto de ${local} clicada!`);
        });
    });

    // === INTERAÇÃO 8: Mensagem de boas-vindas ===
    setTimeout(() => {
        console.log('Bem-vindo ao site Minhas Férias!');
        console.log('Site desenvolvido com HTML, CSS e JavaScript');
        console.log('Destinos: Ubatuba e Presidente Epitácio');
    }, 1000);

    // === INTERAÇÃO 9: Animação dos botões de destino ===
    const botoesSecundarios = document.querySelectorAll('.btn-secondary');
    
    botoesSecundarios.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        botao.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // === INTERAÇÃO 10: Contador de visitas simulado ===
    const footer = document.querySelector('footer .container');
    const visitCounter = document.createElement('p');
    const visitas = Math.floor(Math.random() * 500) + 100; // Número aleatório de visitas
    
    visitCounter.innerHTML = `<i class="fas fa-users"></i> Você é o visitante número ${visitas}`;
    visitCounter.style.marginTop = '1rem';
    visitCounter.style.fontSize = '0.9rem';
    visitCounter.style.color = '#ffd23f';
    footer.appendChild(visitCounter);

    // Mensagem final no console
    console.log('Todas as interações JavaScript foram carregadas com sucesso!');
});