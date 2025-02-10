module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('stories', {
    description: 'Generate a new stories',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'path name please'
      },
      {
        type: 'input',
        name: 'name',
        message: 'stories name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{path}}/{{name}}/{{name}}.stories.tsx',
        templateFile: '.plop-templates/component/template.stories.tsx.hbs'
      }
    ]
  });
  plop.setGenerator('component', {
    description: 'Generate a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: '.plop-templates/component/template.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.stories.tsx',
        templateFile: '.plop-templates/component/template.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.css',
        templateFile: '.plop-templates/component/template.css.hbs'
      }
    ]
  });
};
