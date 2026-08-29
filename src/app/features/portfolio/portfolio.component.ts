import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// =====================================================
// DATA
// =====================================================

// PALITAN ANG PATH NA ITO DEPENDE SA LOCATION NG FILES MO
import { PROJECTS_DATA } from '../../data/projects.data';
import { SKILLS_DATA } from '../../data/skills.data';
import { EXPERIENCE_DATA } from '../../data/experience.data';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('portfolio')
  portfolio!: ElementRef<HTMLElement>;

  private ctx?: gsap.Context;

  // =====================================================
  // DATA
  // =====================================================

  projects = PROJECTS_DATA;
  skills = SKILLS_DATA;
  experiences = EXPERIENCE_DATA;

  // =====================================================
  // CHATBOT
  // =====================================================

  chatbotOpen = false;

  chatInput = '';

  chatMessages: {
    role: 'bot' | 'user';
    text: string;
  }[] = [
    {
      role: 'bot',
      text: "Hi! I'm Ivan's portfolio assistant. Ask me about his projects, skills, experience, or how to contact him.",
    },
  ];

  toggleChatbot(): void {
    this.chatbotOpen = !this.chatbotOpen;
  }

  sendChatMessage(event: Event): void {
    event.preventDefault();

    const question = this.chatInput.trim();

    if (!question) {
      return;
    }

    this.chatMessages.push({
      role: 'user',
      text: question,
    });

    this.chatInput = '';

    window.setTimeout(() => {
      this.chatMessages.push({
        role: 'bot',
        text: this.getChatbotResponse(question),
      });
    }, 250);
  }

  askChatbot(question: string): void {
    this.chatInput = question;

    this.sendChatMessage(new Event('submit'));
  }

  private getChatbotResponse(question: string): string {
    const q = question.toLowerCase();

    // =====================================================
    // PROJECTS
    // =====================================================

    if (
      q.includes('project') ||
      q.includes('projects') ||
      q.includes('built') ||
      q.includes('work') ||
      q.includes('portfolio')
    ) {
      return this.projects
        .map(
          (project) =>
            `${project.number}. ${project.title} ${project.subtitle} — ${project.description}`,
        )
        .join('\n\n');
    }

    // =====================================================
    // TECHNOLOGIES / SKILLS
    // =====================================================

    if (
      q.includes('technology') ||
      q.includes('technologies') ||
      q.includes('tech') ||
      q.includes('tech stack') ||
      q.includes('stack') ||
      q.includes('skill') ||
      q.includes('skills')
    ) {
      const technologies = [
        ...new Set([
          ...this.projects.flatMap((project) => project.technologies),
          ...this.skills.map((skill) => skill.title),
        ]),
      ];

      return `Ivan works across web, mobile, backend and AI integration. His project stack includes: ${technologies.join(', ')}.`;
    }

    // =====================================================
    // EXPERIENCE
    // =====================================================

    if (
      q.includes('experience') ||
      q.includes('work experience') ||
      q.includes('career') ||
      q.includes('background')
    ) {
      return this.experiences
        .map(
          (experience) =>
            `${experience.year} — ${experience.title} ${experience.subtitle}: ${experience.description}`,
        )
        .join('\n\n');
    }

    // =====================================================
    // ABOUT
    // =====================================================

    if (
      q.includes('about') ||
      q.includes('who is ivan') ||
      q.includes('who are you') ||
      q.includes('tell me about ivan')
    ) {
      return 'Ivan Santos is a software developer focused on creating useful, reliable and visually engaging digital products. He works across interfaces, mobile applications, APIs, databases and AI-powered experiences.';
    }

    // =====================================================
    // CONTACT
    // =====================================================

    if (
      q.includes('contact') ||
      q.includes('hire') ||
      q.includes('email') ||
      q.includes('reach') ||
      q.includes('available')
    ) {
      return 'You can contact Ivan through the Contact section of this portfolio. You can also reach him directly via email at dev.ivansantos04@gmail.com or Facebook: Ivan Francisco Santos. Use the “START A CONVERSATION” button to get in touch.';
    }

    // =====================================================
    // ANGULAR
    // =====================================================

    if (q.includes('angular')) {
      return 'Yes. Angular is one of Ivan’s main technologies and is used across several of his web projects.';
    }

    // =====================================================
    // REACT
    // =====================================================

    if (q.includes('react')) {
      return 'Yes. React is part of Ivan’s web development stack and is used in several of his projects.';
    }

    // =====================================================
    // FLUTTER
    // =====================================================

    if (q.includes('flutter')) {
      return 'Yes. Flutter is part of Ivan’s mobile development stack and is used in projects such as Swift Aid, Tricoderma Management, Agrysnc and G-Trike.';
    }

    // =====================================================
    // BACKEND
    // =====================================================

    if (q.includes('backend') || q.includes('api') || q.includes('server')) {
      return 'Ivan works with backend development, REST APIs, databases, authentication and business logic.';
    }

    // =====================================================
    // AI
    // =====================================================

    if (
      q.includes('ai') ||
      q.includes('artificial intelligence') ||
      q.includes('automation')
    ) {
      return 'Ivan works on AI integration, including AI-powered features, API integrations, automation and intelligent workflows.';
    }

    // =====================================================
    // DEFAULT
    // =====================================================

    return "I can tell you about Ivan's projects, technologies, development skills, experience, or how to contact him. Try asking “What projects has Ivan built?”";
  }

  // =====================================================
  // AFTER VIEW INIT
  // =====================================================

  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
      this.createPreloader();

      this.createHeroAnimation();

      this.createFloatingObjects();

      this.createScrollAnimations();

      this.createProjectAnimations();

      this.createStatsAnimation();

      this.createMagneticButtons();

      this.createCursor();

      this.createTextHover();
    }, this.portfolio.nativeElement);
  }

  // =====================================================
  // PRELOADER
  // =====================================================

  private createPreloader(): void {
    const loader = document.querySelector('.loader');

    if (!loader) {
      return;
    }

    const counter = {
      value: 0,
    };

    const tl = gsap.timeline();

    tl.to(counter, {
      value: 100,

      duration: 1.5,

      ease: 'power2.inOut',

      onUpdate: () => {
        const element = document.querySelector('.loader-number');

        if (element) {
          element.textContent = `${Math.round(counter.value)
            .toString()
            .padStart(2, '0')}`;
        }
      },
    });

    tl.to('.loader-line', {
      scaleX: 1,

      duration: 0.5,

      ease: 'power4.inOut',
    });

    tl.to(loader, {
      yPercent: -100,

      duration: 1.1,

      ease: 'power4.inOut',
    });
  }

  // =====================================================
  // HERO
  // =====================================================

  private createHeroAnimation(): void {
    const tl = gsap.timeline({
      delay: 1.9,
    });

    tl.from('.navbar', {
      y: -40,

      opacity: 0,

      duration: 0.8,

      ease: 'power4.out',
    });

    tl.from(
      '.hero-eyebrow',
      {
        y: 30,

        opacity: 0,

        duration: 0.7,
      },
      '-=.4',
    );

    tl.from(
      '.hero-title-line',
      {
        yPercent: 120,

        rotate: 3,

        opacity: 0,

        stagger: 0.13,

        duration: 1.1,

        ease: 'power4.out',
      },
      '-=.3',
    );

    tl.from(
      '.hero-copy',
      {
        y: 40,

        opacity: 0,

        duration: 0.8,
      },
      '-=.6',
    );

    tl.from(
      '.hero-actions',
      {
        y: 30,

        opacity: 0,

        duration: 0.7,
      },
      '-=.5',
    );

    tl.from(
      '.hero-image',
      {
        scale: 0.8,

        opacity: 0,

        rotate: 5,

        duration: 1.4,

        ease: 'power4.out',
      },
      '-=1',
    );

    tl.from(
      '.hero-decoration',
      {
        scale: 0,

        opacity: 0,

        stagger: 0.1,

        duration: 0.8,
      },
      '-=1',
    );
  }

  // =====================================================
  // FLOATING ELEMENTS
  // =====================================================

  private createFloatingObjects(): void {
    gsap.to('.floating-dot', {
      y: -25,

      x: 10,

      duration: 2.5,

      repeat: -1,

      yoyo: true,

      ease: 'sine.inOut',
    });

    gsap.to('.orbit', {
      rotate: 360,

      duration: 30,

      repeat: -1,

      ease: 'none',
    });

    gsap.to('.orbit-small', {
      rotate: -360,

      duration: 18,

      repeat: -1,

      ease: 'none',
    });
  }

  // =====================================================
  // SCROLL ANIMATIONS
  // =====================================================

  private createScrollAnimations(): void {
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
      gsap.from(element, {
        y: 80,

        opacity: 0,

        duration: 1.1,

        ease: 'power4.out',

        scrollTrigger: {
          trigger: element,

          start: 'top 85%',

          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.utils.toArray<HTMLElement>('.line-reveal').forEach((element) => {
      gsap.from(element, {
        scaleX: 0,

        transformOrigin: 'left center',

        duration: 1.2,

        ease: 'power4.inOut',

        scrollTrigger: {
          trigger: element,

          start: 'top 90%',
        },
      });
    });

    gsap.to('.hero-image', {
      y: 120,

      ease: 'none',

      scrollTrigger: {
        trigger: '.hero',

        start: 'top top',

        end: 'bottom top',

        scrub: true,
      },
    });

    gsap.to('.hero-title', {
      x: -80,

      opacity: 0.4,

      ease: 'none',

      scrollTrigger: {
        trigger: '.hero',

        start: 'top top',

        end: 'bottom top',

        scrub: true,
      },
    });
  }

  // =====================================================
  // PROJECTS
  // =====================================================

  private createProjectAnimations(): void {
    const section = document.querySelector('.projects-section');

    const track = document.querySelector('.projects-track');

    if (!section || !track) {
      return;
    }

    const cards = gsap.utils.toArray<HTMLElement>('.project-card');

    if (window.innerWidth > 900) {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 150),

        ease: 'none',

        scrollTrigger: {
          trigger: section,

          start: 'top top',

          end: () => `+=${track.scrollWidth}`,

          pin: true,

          scrub: 1,

          invalidateOnRefresh: true,
        },
      });
    }

    cards.forEach((card) => {
      const image = card.querySelector<HTMLImageElement>('.project-image img');

      if (!image) {
        return;
      }

      gsap.to(image, {
        scale: 1.15,

        ease: 'none',

        scrollTrigger: {
          trigger: card,

          start: 'top bottom',

          end: 'bottom top',

          scrub: true,
        },
      });
    });
  }

  // =====================================================
  // STATS
  // =====================================================

  private createStatsAnimation(): void {
    gsap.utils.toArray<HTMLElement>('.counter').forEach((element) => {
      const target = Number(element.dataset['value']);

      const obj = {
        value: 0,
      };

      gsap.to(obj, {
        value: target,

        duration: 2,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: element,

          start: 'top 85%',

          once: true,
        },

        onUpdate: () => {
          element.textContent = Math.round(obj.value)
            .toString()
            .padStart(2, '0');
        },
      });
    });
  }

  // =====================================================
  // MAGNETIC BUTTONS
  // =====================================================

  private createMagneticButtons(): void {
    const buttons = document.querySelectorAll<HTMLElement>('.magnetic');

    buttons.forEach((button) => {
      button.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;

        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.2,

          y: y * 0.2,

          duration: 0.4,

          ease: 'power3.out',
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          x: 0,

          y: 0,

          duration: 0.7,

          ease: 'elastic.out(1,.4)',
        });
      });
    });
  }

  // =====================================================
  // CURSOR
  // =====================================================

  private createCursor(): void {
    if (window.innerWidth < 900) {
      return;
    }

    const cursor = document.querySelector<HTMLElement>('.cursor');

    if (!cursor) {
      return;
    }

    window.addEventListener('mousemove', (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,

        y: event.clientY,

        duration: 0.35,

        ease: 'power3.out',
      });
    });

    document.querySelectorAll('a, button, .project-card').forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
      });

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
      });
    });
  }

  // =====================================================
  // TEXT HOVER
  // =====================================================

  private createTextHover(): void {
    document
      .querySelectorAll<HTMLElement>('.hover-title')
      .forEach((element) => {
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            x: 20,

            duration: 0.5,

            ease: 'power3.out',
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            x: 0,

            duration: 0.7,

            ease: 'power3.out',
          });
        });
      });
  }

  // =====================================================
  // NAVIGATION
  // =====================================================

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  // =====================================================
  // DESTROY
  // =====================================================

  ngOnDestroy(): void {
    this.ctx?.revert();

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
