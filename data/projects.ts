const projects = [
  {
    id: 1,
    name: 'AOV - Skin upgrade',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/skinupgrade-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/skinupgrade-2.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/skinupgrade-blur.jpg',
    description: [
      'Users can upgrade lower level skins to upper level ones using the correct materials.',
      'Users can pay with extra coins if they do not have the required materials',
      'Users can refresh the deals on the main page.',
    ],
    challenges: [
      'Developing a project with Vue3 and Typescript for the frist time.',
      'Migrating webpack and i18n settings in our internal Vue2 template to the new Vue3 one.',
    ],
    techStack: [
      'Vue3',
      'Typescript',
      'Composition API + setup script',
      'Sass',
      'Vue-i18n',
    ],
  },
  {
    id: 2,
    name: 'LOL - Data Review',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-3.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-4.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-5.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-6.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-7.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-8.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-9.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-10.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/datareview-blur.jpg',
    description: [
      'Users can review their data since 2016.',
      'Users can customize the data they want to share and post them on social media.',
      'Users can share their data with custom meta info.',
      'Users can check their friends data.',
      'The marketing team can view statistics with GA tracking.',
    ],
    challenges: [
      'Handling missing data to display the page properly',
      'Using Nuxt to handle server side rendering.',
      'Letting regionl teams customize the fields of data to display to the user.',
      'Setting up internal cloud services to host the project.',
    ],
    techStack: ['Nuxt', 'Vuex', 'Nuxt i18n', 'Google Analytics 4', 'Sass'],
  },
  {
    id: 3,
    name: 'CODM - Nine Grid',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-3.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-4.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ninegrid-blur.jpg',
    description: [
      'Users can select a jackpot and some milestones of their choice.',
      'Users can spend a few coins to do 1 draw or multiple draws with a discount.',
      'Users can ban some items they don not wish to get before drawing.',
      'Users will get some points after a draw.',
      'Users are able to get the jackpot either by drawing or reaching a certain point.',
    ],
    challenges: [
      'Constructing a custom data structure to facilitate the selection process of milestones in order to accomodate for different configurations.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
  },
  {
    id: 4,
    name: 'LOL - Win Token',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/wintoken-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/wintoken-2.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/wintoken-blur.jpg',
    description: [
      'Making an unorthodox and customized scrollbar for the modal.',
      'Using a slider as a scrollbar to match the design.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
  },
  {
    id: 5,
    name: 'FF - Slot Machine',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/slotmachine-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/slotmachine-2.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/slotmachine-blur.jpg',
    description: [
      'Users can spend some coins to do 1 or multiple draws on the slot machine.',
      'Users can turn on/off the background music.',
      'Users can skip the animation at any point of the draw process.',
    ],
    challenges: [
      'Dealing with legacy code written by a foreign team.',
      'Making a name mask that only appears if the full name of a prize is not visible.',
      'Customizing the Arabic version of the site to make it go from left -> right to right -> left.',
      'Creating a sophistocated touch-scroll behavior for the rewards modal and maintaining the position change with left/right arrows at the same time.',
      'Building a small styleless component library after finishing the project.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
  },
  {
    id: 6,
    name: 'CODM - Token Draw',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/tokendraw-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/tokendraw-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/tokendraw-3.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/tokendraw-blur.jpg',
    description: [
      'Users can spend a few coins to do 1 or multiple draws.',
      'Users can draw one jackpot if they receive a token from the draw process.',
      'Users can exchange 3 items they got from the event for another draw.',
      'Users can press a quick select button and have the event select for them.',
      'Users claim the items they got from the event.',
    ],
    challenges: [
      'Finding the snippet of code that causes the whole page to crash. (Turns out when using css filter property on too many items at the same page. The computation will overwhelm the page.',
      'Making sure users get correct results when pressing the quick select button and when they undo it by designing a customed data structure.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
  },
  {
    id: 7,
    name: 'CODM - Two Layer Gacha',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/twolayer-gacha-1.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/twolayer-gacha-blur.jpg',
    description: [
      'Users can spend a few coins to do 1 or multiple draws.',
      'Users will get an item from the right section when they perform a draw.',
      'Users will be able to draw from the left section if they get a key from the right section.',
    ],
    challenges: [
      'Creating an animation process that factors in API response time and user experience.',
      'Dealing with in-game browser issues that cannot be reproduced in other mainstream browsers by using different methods to simulate css active behavior on mobile.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
  },
  {
    id: 8,
    name: 'LOL - Chessboard',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/chessboard-3.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/chessboard-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/chessboard-1.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/chessboard-blur.jpg',
    description: [
      'Users can select a jackpot.',
      'Users can spend a few coins to do 1 draw.',
      'Users will be closer to the jackpot they selected each time they draw.',
    ],
    challenges: [
      'Creating a 3D layout.',
      'Handling image blurry issues in the in-game browser by moving images outside of the same layer as its wrapper.',
    ],
    techStack: ['Vue2', 'Vuex', 'Vue i18n', 'Sass'],
  },
  {
    id: 9,
    name: 'LOL - Choose Gacha',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/choose-gacha-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/choose-gacha-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/choose-gacha-3.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/choose-gacha-blur.jpg',
    description: [''],
  },
  {
    id: 10,
    name: 'AOV - AOVxUltraman',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ultraman-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ultraman-2.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ultraman-3.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ultraman-blur.jpg',
    description: [''],
  },
  {
    id: 11,
    name: 'CODM - Refresh Gacha',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/refresh-gacha-1.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/refresh-gacha-2.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/refresh-gacha-blur.jpg',
    description: [''],
  },
  {
    id: 12,
    name: 'FTM - Preregistration site',
    imgPaths: [
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-11.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-10.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-9.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-8.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-7.jpg',
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-6.jpg',
    ],
    blurImgPath:
      'https://stefantien-personal-site.s3.us-west-1.amazonaws.com/garena-projects/ftm-blur.jpg',
    description: [''],
  },
];

export default projects;
