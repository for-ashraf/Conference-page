const speakers = [
    {
      id: 1,
      image: './images/speaker-1.jpg',
      name: 'Poppy Crum',
      organization: 'Stanford University Adjunct Professor',
      background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    },
    {
      id: 2,
      image:
        './images/speaker-2.jpg',
      name: 'Dex Hunterr',
      organization: 'Global Communications',
      background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    },
    {
      id: 2,
      image:
        './images/speaker-6.jpg',
      name: 'vivek wadhwa',
      organization: 'Carnegi Mellon University',
      background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    },
    {
      id: 2,
      image:
        './images/speaker-1.jpg',
      name: 'Kate Darling',
      organization: 'Social Robotics',
      background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    },
    {
      id: 2,
      image:
        './images/speaker-2.jpg',
      name: 'Paul Zikopolous',
      organization: 'IBM Inc',
      background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    },
    {
      id: 2,
      image:
        './images/speaker-3.jpg',
      name: 'Muhammad Ashraf',
      organization: 'EducationSoul',
      background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    },
  ];
  
  const featuredSpeakers = document.querySelector('.speakers-list');
  const speakersButton = document.querySelector('.speakers-btn');
  
  function loadSpeakers() {
    speakers.forEach((speaker, index) => {
      const speakerContainer = document.createElement('article');
      speakerContainer.className = index > 1 ? 'flx-row-center speakers-display' : 'flx-row-center';
      featuredSpeakers.appendChild(speakerContainer);
  
      const speakerImage = document.createElement('img');
      speakerImage.src = `${speaker.image}`;
      speakerImage.alt = `Image of ${speaker.name}`;
      speakerImage.className = 'speaker-image';
      speakerContainer.appendChild(speakerImage);
  
      const speakerInfos = document.createElement('div');
      speakerInfos.className = 'speaker-infos';
      speakerContainer.appendChild(speakerInfos);
  
      const speakerName = document.createElement('h3');
      speakerName.className = 'light-black heading-medium speaker-heading';
      speakerName.textContent = `${speaker.name}`;
      speakerInfos.appendChild(speakerName);
  
      const speakerOrganization = document.createElement('h4');
      speakerOrganization.className = 'dark-orange';
      speakerOrganization.textContent = `${speaker.organization}`;
      speakerInfos.appendChild(speakerOrganization);
  
      const speakerBackground = document.createElement('h4');
      speakerBackground.className = 'light-black';
      speakerBackground.textContent = `${speaker.background}`;
      speakerInfos.appendChild(speakerBackground);
    });
  }
  
  function toggleSpeakers() {
    const displayedItems = document.querySelectorAll('.speakers-display');
    const toggledItems = document.querySelectorAll('.toggle');
  
    if (toggledItems.length === 0) {
      displayedItems.forEach((item) => {
        item.className = 'flx-row-center toggle';
      });
      speakersButton.textContent = 'LESS';
      const arrow = document.createElement('i');
      arrow.className = 'fas fa-angle-up down-arrow';
      speakersButton.appendChild(arrow);
    }
    if (toggledItems.length) {
      toggledItems.forEach((item) => {
        item.className = 'flx-row-center speakers-display';
        speakersButton.textContent = 'MORE';
        const arrow = document.createElement('i');
        arrow.className = 'fas fa-angle-down down-arrow';
        speakersButton.appendChild(arrow);
      });
    }
  }
  
  featuredSpeakers.addEventListener('DOMContentLoaded', loadSpeakers());
  speakersButton.addEventListener('onclick', toggleSpeakers);
  
  function openNav() {
    document.getElementById('myNavBar').style.width = '100%';
  }
  
  function closeNav() {
    document.getElementById('myNavBar').style.width = '0%';
  }
  
  openNav();
  closeNav();
  