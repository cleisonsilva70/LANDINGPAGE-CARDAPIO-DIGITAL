import Image from "next/image";

export default function Home() {
  const salesWhatsapp = "5584999999999";
  const whatsappMessage = encodeURIComponent(
    "Oi! Quero entender como esse cardapio digital pode funcionar no meu delivery.",
  );
  const whatsappHref = `https://wa.me/${salesWhatsapp}?text=${whatsappMessage}`;

  const features = [
    {
      tag: "Operacao",
      title: "Atendimento mais organizado",
      text: "O pedido chega mais claro, o pagamento e validado e a equipe atende sem confusao.",
    },
    {
      tag: "Equipe",
      title: "Cozinha focada no preparo",
      text: "A cozinha enxerga apenas os pedidos liberados e trabalha com mais ritmo e menos erro.",
    },
    {
      tag: "Marca",
      title: "Sua marca com mais presenca",
      text: "Logo, cores, banners e categorias para passar mais profissionalismo no delivery.",
    },
  ];

  const timeline = [
    "Cliente escolhe os produtos",
    "Pedido vai para o WhatsApp",
    "Atendimento valida o pagamento",
    "Cozinha recebe apenas o que esta liberado",
  ];

  const showcases = [
    {
      tag: "Cardapio",
      title: "Um cardapio bonito e facil de usar",
      text: "Categorias bem organizadas, produtos em destaque e carrinho simples para o cliente pedir sem dificuldade.",
      highlight: "Boa apresentacao ajuda o cliente a pedir com mais confianca.",
      theme: "showcase-card showcase-card-light",
      image: "/screenshots/cardapio.png",
    },
    {
      tag: "Checkout",
      title: "Checkout rapido para fechar o pedido",
      text: "Entrega, pagamento e resumo aparecem de forma clara para o cliente concluir sem travar no meio do caminho.",
      highlight: "Quanto mais simples o fechamento, maior a chance de converter.",
      theme: "showcase-card showcase-card-cream",
      image: "/screenshots/checkout.png",
    },
    {
      tag: "Atendimento",
      title: "Atendimento com mais controle",
      text: "Os pedidos entram organizados, com filtros e confirmacao antes de seguir para a cozinha.",
      highlight: "Voce para de misturar pedido novo, pagamento e preparo.",
      theme: "showcase-card showcase-card-light",
      image: "/screenshots/atendimento.png",
    },
    {
      tag: "Cozinha",
      title: "Cozinha organizada por etapa",
      text: "A cozinha enxerga apenas os pedidos liberados, separados por status e prioridade.",
      highlight: "A equipe trabalha melhor quando o fluxo esta limpo e visual.",
      theme: "showcase-card showcase-card-dark",
      image: "/screenshots/cozinha.png",
    },
  ];

  const faqs = [
    {
      question: "Funciona bem no celular?",
      answer:
        "Sim. O foco do sistema e justamente o celular, tanto para o cliente fazer o pedido quanto para a operacao acompanhar atendimento e cozinha.",
    },
    {
      question: "O pedido vai para onde?",
      answer:
        "O cliente faz o pedido no cardapio digital e ele segue para o WhatsApp da operacao. Depois disso, o atendimento valida e libera para a cozinha.",
    },
    {
      question: "Posso usar com a minha marca?",
      answer:
        "Sim. A implantacao inclui nome, logo, banners, categorias, produtos e visual adaptado para a identidade da sua hamburgueria ou restaurante.",
    },
    {
      question: "Quanto custa para comecar?",
      answer:
        "A implantacao custa R$ 200 e a mensalidade do sistema e R$ 59,90.",
    },
  ];

  return (
    <main className="landing-page pb-20">
      <section className="hero-section">
        <div className="container-shell">
          <div className="hero-card">
            <div className="hero-copy">
              <span className="eyebrow-pill">Cardapio digital</span>
              <h1 className="hero-title">
                receba pedidos com mais organizacao e passe uma imagem mais profissional
              </h1>
              <p className="hero-text">
                Ideal para hamburguerias, lanchonetes e restaurantes que querem vender
                pelo celular sem depender de atendimento baguncado no WhatsApp.
              </p>

              <div className="hero-actions">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="cta-button cta-primary">
                  Quero ver funcionando
                </a>
                <a href="#planos" className="cta-button cta-outline">
                  Ver planos
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-carousel-desktop">
                <div className="hero-carousel-track">
                  <div className="hero-image-stage">
                    <Image
                      src="/screenshots/pedido%20(1).jpeg"
                      alt="Pedido no WhatsApp 1"
                      width={1400}
                      height={1100}
                      className="hero-stage-image"
                    />
                  </div>
                  <div className="hero-image-stage">
                    <Image
                      src="/screenshots/pedido%20(2).jpeg"
                      alt="Pedido no WhatsApp 2"
                      width={1400}
                      height={1100}
                      className="hero-stage-image"
                    />
                  </div>
                  <div className="hero-image-stage">
                    <Image
                      src="/screenshots/pedido%20(3).jpeg"
                      alt="Pedido no WhatsApp 3"
                      width={1400}
                      height={1100}
                      className="hero-stage-image"
                    />
                  </div>
                </div>
              </div>

              <div className="hero-image-grid-mobile">
                <div className="hero-image-stage">
                  <Image
                    src="/screenshots/pedido%20(1).jpeg"
                    alt="Pedido no WhatsApp 1"
                    width={1400}
                    height={1100}
                    className="hero-stage-image"
                  />
                </div>
                <div className="hero-image-stage">
                  <Image
                    src="/screenshots/pedido%20(2).jpeg"
                    alt="Pedido no WhatsApp 2"
                    width={1400}
                    height={1100}
                    className="hero-stage-image"
                  />
                </div>
                <div className="hero-image-stage">
                  <Image
                    src="/screenshots/pedido%20(3).jpeg"
                    alt="Pedido no WhatsApp 3"
                    width={1400}
                    height={1100}
                    className="hero-stage-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell section-spacing">
        <div className="problem-strip">
          <div>
            <p className="section-tag">O problema</p>
            <h2 className="section-title">
              muita hamburgueria ainda perde tempo e pedido na desorganizacao
            </h2>
          </div>
          <p className="section-copy">
            Quando o pedido chega confuso, o atendimento se enrola, a cozinha recebe
            informacao errada e o cliente percebe na hora que a operacao nao esta redonda.
          </p>
        </div>
      </section>

      <section className="container-shell section-spacing">
        <div className="proof-shell">
          <div className="proof-header">
            <div>
              <p className="section-tag">Prova visual do sistema</p>
              <h2 className="section-title">
                mostre uma vitrine profissional que ajuda sua hamburgueria a vender mais
              </h2>
            </div>
            <p className="section-copy">
              Quando o cliente bate o olho em um cardapio bonito, claro e facil de
              pedir, a chance de fechar o pedido aumenta e sua marca passa muito mais
              confianca.
            </p>
          </div>

          <div className="showcase-grid">
            {showcases.map((item) => (
              <article key={item.title} className={item.theme}>
                <span className="panel-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong className="showcase-highlight">{item.highlight}</strong>
                <div className="showcase-screen">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="showcase-image"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell section-spacing">
        <div className="feature-grid">
          {features.slice(2).map((feature) => (
            <article key={feature.title} className="feature-panel">
              <span className="panel-tag">{feature.tag}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell section-spacing">
        <div className="dark-showcase">
          <div className="dark-copy">
            <p className="section-tag section-tag-dark">Como funciona</p>
            <h2 className="section-title section-title-dark">
              um fluxo simples para o cliente pedir e a equipe produzir melhor
            </h2>
            <p className="section-copy section-copy-dark">
              O cliente faz o pedido pelo celular, o atendimento organiza a entrada e
              a cozinha recebe apenas o que realmente ja esta pronto para preparo.
            </p>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="cta-button cta-primary">
              Quero uma demonstracao
            </a>
          </div>

          <div className="timeline-grid">
            {timeline.map((step, index) => (
              <div key={step} className="timeline-card">
                <span className="timeline-step">Etapa {index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="container-shell section-spacing">
        <div className="pricing-shell">
          <div className="pricing-intro">
            <p className="section-tag">Oferta comercial</p>
            <h2 className="section-title">
              uma proposta simples para fechar mais facil com pequenos negocios
            </h2>
            <p className="section-copy">
              O cliente entende rapido: paga para implantar uma vez e depois mantem o
              sistema online com uma mensalidade acessivel.
            </p>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card pricing-card-light">
              <span className="panel-tag">Implantacao</span>
              <h3>R$ 200</h3>
              <div className="price-chip">valor de entrada</div>
              <p>
                Implantacao inicial com visual da marca, produtos, categorias, banners
                e link publicado.
              </p>
              <ul>
                <li>Visual personalizado</li>
                <li>Cadastro inicial do cardapio</li>
                <li>Configuracao do WhatsApp</li>
                <li>Entrega pronta para uso</li>
              </ul>
            </article>

            <article className="pricing-card pricing-card-dark">
              <span className="panel-tag panel-tag-yellow">Mensalidade</span>
              <h3>R$ 59,90</h3>
              <div className="price-chip price-chip-dark">recorrencia mensal</div>
              <p>
                Sistema online todos os meses com manutencao, suporte basico e
                funcionamento continuo para o cliente seguir vendendo.
              </p>
              <ul>
                <li>Hospedagem do sistema</li>
                <li>Suporte basico</li>
                <li>Pequenos ajustes</li>
                <li>Atendimento e cozinha ativos</li>
              </ul>
            </article>
          </div>

          <div className="pricing-actions">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="cta-button cta-primary">
              Quero contratar
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="cta-button cta-outline">
              Tirar duvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="container-shell section-spacing">
        <div className="faq-shell">
          <div className="faq-intro">
            <p className="section-tag">FAQ</p>
            <h2 className="section-title">duvidas que seu cliente pode ter antes de fechar</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell section-spacing">
        <div className="closing-shell">
          <div>
            <p className="section-tag">Fechamento</p>
            <h2 className="section-title">
              pronto para apresentar uma solucao que deixa o delivery mais profissional?
            </h2>
            <p className="section-copy">
              Use essa pagina para abrir conversa, mostrar valor e levar o cliente
              direto para o WhatsApp com mais confianca.
            </p>
          </div>
          <div className="closing-card">
            <strong>chamada comercial pronta</strong>
            <p>
              Clique no botao abaixo e leve o interessado direto para o seu WhatsApp
              para apresentar a demonstracao.
            </p>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="cta-button cta-primary cta-full">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

