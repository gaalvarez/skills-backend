import { Injectable } from '@nestjs/common';
import { QuizModel } from './skill.model';

const QUESTIONS: QuizModel[] = [
  {
    id: 1,
    name: 'Angular Quiz',
    questions: [
      {
        id: 1,
        question: '¿Cuantos tipos de directivas existen en angular?',
        options: [
          '2, directivas de atributo y de estructura',
          '1 directivas solamente',
          '3, directivas de atributo, de estructura y los componentes que son directivas con template',
          'No lo sé aún',
        ],
        response: 2,
      },
      {
        id: 2,
        question:
          '¿Qué patrón en Angular ayuda a mejorar el reuso de componentes?',
        options: [
          'Smart and Dumb components',
          'Singleton',
          'Inyección de dependencia',
          'Usar layouts',
        ],
        response: 0,
      },
    ],
  },
  {
    id: 2,
    name: 'Vue Quiz',
    questions: [
      {
        id: 1,
        question:
          '¿Cuál es la forma de pasar información de un componente padre a un hijo?',
        options: ['Atributos', 'Propiedades', 'Entradas', 'Eventos'],
        response: 1,
      },
      {
        id: 2,
        question: '¿Una propiedad computada es?',
        options: [
          'La forma de comunicarse con el elemento padre',
          'Una forma de extender los datos para simplificar las expresiones en el template',
          'Un escuchador de los cambios de una propiedad de data',
          'Todas las anteriores',
        ],
        response: 1,
      },
    ],
  },
  {
    id: 3,
    name: 'NodeJS Quiz',
    questions: [
      {
        id: 1,
        question:
          '¿Node es famoso por su patrón de no bloqueo. ¿Puede usarse con un patrón de bloqueo?',
        options: [
          'Para habilitar la ejecución de bloqueo, se puede utilizar una opción CLI especial',
          "El patrón de bloqueo solo se puede utilizar si no se especifica 'modo estricto'",
          'Todos los módulos de node solo se pueden usar con el patrón sin bloqueo',
          'Node can be used with both blocking and non-blocking patterns',
        ],
        response: 3,
      },
      {
        id: 2,
        question:
          'En Express.js, asumiendo que app es el nombre del objeto del servidor Express, ¿qué hace app.delete()?',
        options: [
          'eliminar todas las rutas en caché',
          'crear una ruta HTTP DELETE',
          'eliminar una variable de servidor',
          'detiene el servidor',
        ],
        response: 1,
      },
    ],
  },
];

@Injectable()
export class SkillService {
  getQuizListData(): QuizModel[] {
    return [
      {
        id: 1,
        name: 'Angular Quiz',
        description: 'mejor quiz de angular',
      },
      {
        id: 2,
        name: 'Vue Quiz',
        description: 'prueba tus habilidades con vue v3',
      },
      {
        id: 3,
        name: 'NodeJS Quiz',
        description: 'vuelvete un full stack certificado con nodejs',
      },
    ];
  }

  getQuizQuestions(id: number): QuizModel {
    return (
      QUESTIONS.find((question) => question.id === id) || ({} as QuizModel)
    );
  }
}
