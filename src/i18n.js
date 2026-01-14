import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      // Menu
      "menu.home": "Início",
      "menu.about": "Quem Somos",
      "menu.projects": "Projetos",
      "menu.join": "Associe-se",
      "menu.contact": "Contato",
      "menu.voting": "Votação",

      // Home
      "home.hero.title": "Instituto Português de Negócios Sociais",
      "home.hero.subtitle": "Promovendo impacto social sustentável em Portugal",
      "home.hero.cta": "Saiba Mais",

      // Projects Page
      "projects.title": "Nossos Projetos",
      "projects.subtitle": "Iniciativas de impacto socioambiental",

      // Quinta do Visconde de Salreu
      "projects.quinta.title": "Quinta do Visconde de Salreu",
      "projects.quinta.subtitle": "Modelo de Regeneração Socioambiental",
      "projects.quinta.description": "Projeto integrado de reflorestamento, restauro patrimonial, energias renováveis e impacto comunitário em Estarreja, Portugal.",
      "projects.quinta.download": "Baixar Relatório Completo",

      "projects.quinta.objectives.title": "Objetivos Principais",
      "projects.quinta.obj1.title": "Reflorestamento",
      "projects.quinta.obj1.desc": "Plantio de 5.000 árvores nativas com sequestro de 300-400 toneladas CO₂/ano",
      "projects.quinta.obj2.title": "Restauro Sustentável",
      "projects.quinta.obj2.desc": "Recuperação do palacete histórico do século XIX com materiais sustentáveis",
      "projects.quinta.obj3.title": "Energias Renováveis",
      "projects.quinta.obj3.desc": "100% autossuficiência energética através de solar, biomassa e geotermia",
      "projects.quinta.obj4.title": "Impacto Social",
      "projects.quinta.obj4.desc": "30-40 empregos diretos e 100+ pessoas formadas anualmente",

      "projects.quinta.synergy.title": "Sinergia Bureau Social + GreenCheck",
      "projects.quinta.synergy.bureau": "Bureau Social: Governança participativa e impacto social",
      "projects.quinta.synergy.greencheck": "GreenCheck: Validação ambiental e certificação ESG",

      "projects.quinta.impact.title": "Impacto Projetado",
      "projects.quinta.impact.trees": "árvores plantadas",
      "projects.quinta.impact.co2": "ton CO₂/ano",
      "projects.quinta.impact.jobs": "empregos diretos",
      "projects.quinta.impact.training": "pessoas formadas/ano",

      // Financing Section
      "financing.title": "Financiamento e Fundos",
      "financing.subtitle": "Como o Bureau Social capta recursos para projetos de impacto",

      "financing.model.title": "Modelo de Financiamento",
      "financing.model.desc": "Como associação sem fins lucrativos, o Bureau Social utiliza um modelo diversificado de captação de recursos para garantir a sustentabilidade dos projetos sociais.",

      "financing.sources.title": "Fontes de Financiamento",
      "financing.source1.title": "Fundos Europeus",
      "financing.source1.desc": "Portugal 2030, POSEUR, Turismo de Portugal e outros programas de apoio a projetos socioambientais",
      "financing.source2.title": "Mecenato Cultural e Empresarial",
      "financing.source2.desc": "Parcerias com empresas através da Lei do Mecenato (benefícios fiscais de até 140%)",
      "financing.source3.title": "Associados e Parceiros",
      "financing.source3.desc": "Contribuições de associados individuais e institucionais que apoiam nossa missão",
      "financing.source4.title": "Crowdfunding e Doações",
      "financing.source4.desc": "Campanhas de financiamento coletivo para projetos específicos",
      "financing.source5.title": "Créditos de Carbono",
      "financing.source5.desc": "Geração de receita através de projetos de reflorestamento certificados",
      "financing.source6.title": "Eventos e Serviços",
      "financing.source6.desc": "Formação profissional, consultoria e eventos sustentáveis",

      "financing.transparency.title": "Transparência Total",
      "financing.transparency.desc": "Todos os recursos captados são auditados e reportados anualmente aos associados e parceiros. Acreditamos em governança participativa e prestação de contas.",

      // Partnership Section
      "partnership.title": "Oportunidades de Parceria",
      "partnership.subtitle": "Junte-se a nós na construção de um futuro mais sustentável",

      "partnership.types.title": "Tipos de Parceria",
      "partnership.type1.title": "Parceiro Estratégico",
      "partnership.type1.desc": "Empresas e instituições que co-desenvolvem projetos de impacto socioambiental",
      "partnership.type2.title": "Parceiro Financeiro",
      "partnership.type2.desc": "Investidores de impacto e fundos que apoiam financeiramente nossos projetos",
      "partnership.type3.title": "Parceiro Técnico",
      "partnership.type3.desc": "Universidades, centros de investigação e empresas que fornecem expertise",
      "partnership.type4.title": "Parceiro Comunitário",
      "partnership.type4.desc": "Associações locais e ONGs que trabalham diretamente com as comunidades",

      "partnership.benefits.title": "Benefícios para Parceiros",
      "partnership.benefit1": "Certificação ESG e relatórios de impacto",
      "partnership.benefit2": "Visibilidade em projetos de referência",
      "partnership.benefit3": "Acesso a rede de parceiros estratégicos",
      "partnership.benefit4": "Benefícios fiscais (Lei do Mecenato)",
      "partnership.benefit5": "Participação em governança de projetos",
      "partnership.benefit6": "Relatórios de impacto social e ambiental",

      "partnership.cta": "Tornar-se Parceiro",

      // Technical Project Section
      "technical.title": "Projeto Técnico de Restauro",
      "technical.subtitle": "Edifício Histórico na Graça/Alfama, Lisboa",
      "technical.description": "Projeto técnico completo de restauro e reabilitação de edifício devoluto da Santa Casa da Misericórdia, com orçamento de €1.1M, técnicas tradicionais portuguesas e programa de habitação social para artesãos e artistas.",
      "technical.download": "Baixar Projeto Técnico Completo",
      "technical.investment": "Investimento Total",
      "technical.timeline": "Prazo (meses)",
      "technical.units": "Unidades Habitacionais",
      "technical.jobs": "Empregos Criados",

      // Housing Page
      "housing.hero.title": "Habitação Social para Artistas e Artesãos",
      "housing.hero.subtitle": "Reabilitando o patrimônio histórico de Lisboa com impacto social",
      "housing.description": "O Bureau Social promove o acesso à habitação digna para profissionais da cultura, integrando-os na malha urbana através da reabilitação de edifícios históricos.",
      "housing.download": "Baixar Edital",
      "housing.apply": "Candidatar-se",
      "housing.professions.title": "Público-Alvo",
      "housing.professions.construction": "Construção Tradicional",
      "housing.professions.construction.desc": "Mestres de obras, pedreiros e especialistas em restauro.",
      "housing.professions.arts": "Artes Visuais",
      "housing.professions.arts.desc": "Pintores, escultores e artistas plásticos.",
      "housing.professions.performance": "Artes Performativas",
      "housing.professions.performance.desc": "Atores, músicos e bailarinos.",
      "housing.professions.crafts": "Artesanato",
      "housing.professions.crafts.desc": "Ourives, tecelões e artesãos locais.",
      "housing.how.title": "Como Funciona",
      "housing.how.offer.title": "O que oferecemos",
      "housing.how.offer.desc": "Habitação a custos controlados em zonas centrais de Lisboa e espaços de trabalho partilhados.",
      "housing.how.receive.title": "O que recebemos",
      "housing.how.receive.desc": "A contrapartida é a participação em projetos de regeneração urbana e impacto comunitário.",
      "housing.options.title": "Opções de Participação",
      "housing.option.a": "Opção A: Residência permanente com custos reduzidos.",
      "housing.option.b": "Opção B: Residência temporária para projetos específicos.",
      "housing.option.c": "Opção C: Uso exclusivo de ateliês e oficinas.",

      // Voting
      "voting.title": "Sistema de Votação Participativa",
      "voting.subtitle": "Participe nas decisões estratégicas do Bureau Social",
      "voting.active.proposals": "Propostas Ativas",
      "voting.vote.button": "Votar",
      "voting.ends": "Termina em",
      "voting.status.open": "Aberto",
      "voting.status.closed": "Encerrado",
      "voting.proposal1.title": "Aprovação do Orçamento para Quinta do Visconde (2025)",
      "voting.proposal1.desc": "Votação para aprovação da verba destinada ao restauro do palacete principal.",
      "voting.proposal2.title": "Novo Programa de Estágios",
      "voting.proposal2.desc": "Criação de 10 vagas de estágio para jovens artesãos de Estarreja.",
      "voting.thanks": "Obrigado por participar!",

      // Footer
      "footer.about": "Sobre o Bureau Social",
      "footer.about.desc": "O Instituto Português de Negócios Sociais – Bureau Social promove projetos de impacto socioambiental através de governança participativa e parcerias estratégicas.",
      "footer.contact": "Contato",
      "footer.email": "Email",
      "footer.phone": "Telefone",
      "footer.rights": "Todos os direitos reservados",

      // Forms
      "form.name": "Nome Completo",
      "form.email": "Email",
      "form.phone": "Telefone",
      "form.subject": "Assunto",
      "form.message": "Mensagem",
      "form.motivation": "Por que deseja participar deste programa?",
      "form.experience": "Anos de Experiência",
      "form.craft": "Ofício/Arte Principal",
      "form.submit": "Enviar",
      "form.sending": "Enviando...",
      "form.success": "Enviado com sucesso!",
      "form.error": "Erro ao enviar. Tente novamente.",
      "form.required": "Campo obrigatório",
    }
  },
  en: {
    translation: {
      // Menu
      "menu.home": "Home",
      "menu.about": "About Us",
      "menu.projects": "Projects",
      "menu.join": "Join Us",
      "menu.contact": "Contact",
      "menu.voting": "Voting",

      // Home
      "home.hero.title": "Portuguese Institute of Social Business",
      "home.hero.subtitle": "Promoting sustainable social impact in Portugal",
      "home.hero.cta": "Learn More",

      // Projects Page
      "projects.title": "Our Projects",
      "projects.subtitle": "Social and environmental impact initiatives",

      // Quinta do Visconde de Salreu
      "projects.quinta.title": "Quinta do Visconde de Salreu",
      "projects.quinta.subtitle": "Social-Environmental Regeneration Model",
      "projects.quinta.description": "Integrated project of reforestation, heritage restoration, renewable energy and community impact in Estarreja, Portugal.",
      "projects.quinta.download": "Download Full Report",

      "projects.quinta.objectives.title": "Main Objectives",
      "projects.quinta.obj1.title": "Reforestation",
      "projects.quinta.obj1.desc": "Planting 5,000 native trees with sequestration of 300-400 tons CO₂/year",
      "projects.quinta.obj2.title": "Sustainable Restoration",
      "projects.quinta.obj2.desc": "Recovery of 19th century historic manor with sustainable materials",
      "projects.quinta.obj3.title": "Renewable Energy",
      "projects.quinta.obj3.desc": "100% energy self-sufficiency through solar, biomass and geothermal",
      "projects.quinta.obj4.title": "Social Impact",
      "projects.quinta.obj4.desc": "30-40 direct jobs and 100+ people trained annually",

      "projects.quinta.synergy.title": "Bureau Social + GreenCheck Synergy",
      "projects.quinta.synergy.bureau": "Bureau Social: Participatory governance and social impact",
      "projects.quinta.synergy.greencheck": "GreenCheck: Environmental validation and ESG certification",

      "projects.quinta.impact.title": "Projected Impact",
      "projects.quinta.impact.trees": "trees planted",
      "projects.quinta.impact.co2": "tons CO₂/year",
      "projects.quinta.impact.jobs": "direct jobs",
      "projects.quinta.impact.training": "people trained/year",

      // Financing Section
      "financing.title": "Financing and Funds",
      "financing.subtitle": "How Bureau Social raises resources for impact projects",

      "financing.model.title": "Financing Model",
      "financing.model.desc": "As a non-profit association, Bureau Social uses a diversified resource mobilization model to ensure the sustainability of social projects.",

      "financing.sources.title": "Funding Sources",
      "financing.source1.title": "European Funds",
      "financing.source1.desc": "Portugal 2030, POSEUR, Tourism of Portugal and other programs supporting social-environmental projects",
      "financing.source2.title": "Cultural and Corporate Patronage",
      "financing.source2.desc": "Partnerships with companies through Patronage Law (tax benefits up to 140%)",
      "financing.source3.title": "Members and Partners",
      "financing.source3.desc": "Contributions from individual and institutional members supporting our mission",
      "financing.source4.title": "Crowdfunding and Donations",
      "financing.source4.desc": "Collective financing campaigns for specific projects",
      "financing.source5.title": "Carbon Credits",
      "financing.source5.desc": "Revenue generation through certified reforestation projects",
      "financing.source6.title": "Events and Services",
      "financing.source6.desc": "Professional training, consulting and sustainable events",

      "financing.transparency.title": "Total Transparency",
      "financing.transparency.desc": "All raised resources are audited and reported annually to members and partners. We believe in participatory governance and accountability.",

      // Partnership Section
      "partnership.title": "Partnership Opportunities",
      "partnership.subtitle": "Join us in building a more sustainable future",

      "partnership.types.title": "Partnership Types",
      "partnership.type1.title": "Strategic Partner",
      "partnership.type1.desc": "Companies and institutions co-developing social-environmental impact projects",
      "partnership.type2.title": "Financial Partner",
      "partnership.type2.desc": "Impact investors and funds financially supporting our projects",
      "partnership.type3.title": "Technical Partner",
      "partnership.type3.desc": "Universities, research centers and companies providing expertise",
      "partnership.type4.title": "Community Partner",
      "partnership.type4.desc": "Local associations and NGOs working directly with communities",

      "partnership.benefits.title": "Partner Benefits",
      "partnership.benefit1": "ESG certification and impact reports",
      "partnership.benefit2": "Visibility in reference projects",
      "partnership.benefit3": "Access to strategic partner network",
      "partnership.benefit4": "Tax benefits (Patronage Law)",
      "partnership.benefit5": "Participation in project governance",
      "partnership.benefit6": "Social and environmental impact reports",

      "partnership.cta": "Become a Partner",

      // Technical Project Section
      "technical.title": "Technical Restoration Project",
      "technical.subtitle": "Historic Building in Graça/Alfama, Lisbon",
      "technical.description": "Complete technical project for restoration and rehabilitation of a derelict building from Santa Casa da Misericórdia, with a budget of €1.1M, traditional Portuguese techniques and social housing program for artisans and artists.",
      "technical.download": "Download Complete Technical Project",
      "technical.investment": "Total Investment",
      "technical.timeline": "Timeline (months)",
      "technical.units": "Housing Units",
      "technical.jobs": "Jobs Created",

      // Footer
      "footer.about": "About Bureau Social",
      "footer.about.desc": "The Portuguese Institute of Social Business – Bureau Social promotes social-environmental impact projects through participatory governance and strategic partnerships.",
      "footer.contact": "Contact",
      "footer.email": "Email",
      "footer.phone": "Phone",
      "footer.rights": "All rights reserved",

      // Forms
      "form.name": "Full Name",
      "form.email": "Email",
      "form.phone": "Phone",
      "form.subject": "Subject",
      "form.message": "Message",
      "form.motivation": "Why do you want to participate in this program?",
      "form.experience": "Years of Experience",
      "form.craft": "Main Craft/Art",
      "form.submit": "Submit",
      "form.sending": "Sending...",
      "form.success": "Sent successfully!",
      "form.error": "Error sending. Please try again.",
      "form.required": "Required field",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
