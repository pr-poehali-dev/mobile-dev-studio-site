import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Smartphone",
      title: "iOS разработка",
      description: "Нативные приложения на Swift с безупречной производительностью"
    },
    {
      icon: "TabletSmartphone",
      title: "Android разработка",
      description: "Современные решения на Kotlin для любых Android-устройств"
    },
    {
      icon: "Layers",
      title: "Кроссплатформа",
      description: "React Native и Flutter для одновременного запуска на iOS и Android"
    },
    {
      icon: "Palette",
      title: "UI/UX дизайн",
      description: "Интуитивные интерфейсы, которые любят пользователи"
    }
  ];

  const technologies = [
    { name: "Swift", icon: "Code2" },
    { name: "Kotlin", icon: "Smartphone" },
    { name: "React Native", icon: "Layers" },
    { name: "Flutter", icon: "Feather" },
    { name: "Firebase", icon: "Database" },
    { name: "REST API", icon: "Globe" }
  ];

  const portfolio = [
    {
      title: "Банковское приложение",
      category: "Финтех",
      image: "https://cdn.poehali.dev/projects/8a3ae8b9-598a-4e4f-9dfe-15c27bc7d9eb/files/b0c8efb1-0e44-43d7-8ee8-17639b2d598e.jpg",
      description: "Полнофункциональное банковское приложение с системой платежей"
    },
    {
      title: "Фитнес-трекер",
      category: "Здоровье",
      image: "https://cdn.poehali.dev/projects/8a3ae8b9-598a-4e4f-9dfe-15c27bc7d9eb/files/63e434a9-599b-4b10-a219-4411cf76317e.jpg",
      description: "Приложение для отслеживания тренировок и питания"
    },
    {
      title: "E-commerce платформа",
      category: "Маркетплейс",
      image: "https://cdn.poehali.dev/projects/8a3ae8b9-598a-4e4f-9dfe-15c27bc7d9eb/files/9bb57827-c11a-4398-a066-51d8e04457d0.jpg",
      description: "Интернет-магазин с интеграцией платежных систем"
    }
  ];

  const team = [
    { name: "Алексей Иванов", role: "iOS Lead", icon: "User" },
    { name: "Мария Петрова", role: "Android Lead", icon: "User" },
    { name: "Дмитрий Сидoров", role: "UI/UX Designer", icon: "User" },
    { name: "Елена Смирнова", role: "Project Manager", icon: "User" }
  ];

  const cases = [
    {
      title: "Рост конверсии на 340%",
      client: "Финтех стартап",
      description: "Редизайн мобильного приложения увеличил конверсию регистраций в 3.4 раза"
    },
    {
      title: "1М+ установок за 3 месяца",
      client: "E-commerce проект",
      description: "Запуск MVP и масштабирование до миллиона активных пользователей"
    },
    {
      title: "Сокращение времени разработки на 50%",
      client: "Корпоративный заказчик",
      description: "Переход на кроссплатформенную разработку ускорил релизы"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Smartphone" size={28} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">MobileDev</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["home", "services", "portfolio", "technologies", "team", "cases", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "services" && "Услуги"}
                  {section === "portfolio" && "Портфолио"}
                  {section === "technologies" && "Технологии"}
                  {section === "team" && "Команда"}
                  {section === "cases" && "Кейсы"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection("contacts")}>Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-secondary">
              Создаём мобильные
              <span className="text-primary block mt-2">приложения будущего</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Превращаем идеи в успешные iOS и Android приложения с выдающимся UX
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("portfolio")} className="hover-scale">
                Смотреть работы
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contacts")}>
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg">
                <CardContent className="p-8">
                  <Icon name={service.icon} size={48} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-secondary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale border-0 shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 text-secondary">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Технологии</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Icon name={tech.icon} size={40} className="text-primary" />
                  <span className="font-semibold text-secondary">{tech.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon} size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Кейсы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{caseItem.title}</h3>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide block mb-4">
                    {caseItem.client}
                  </span>
                  <p className="text-muted-foreground">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Обсудим ваш проект?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover-scale">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-secondary">Email</p>
                    <p className="text-muted-foreground">hello@mobiledev.studio</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover-scale">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-secondary">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover-scale">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-secondary">Офис</p>
                    <p className="text-muted-foreground">Москва, Пресненская наб., 12</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full mt-6 hover-scale">
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 MobileDev Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
