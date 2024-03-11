const membersDiv = document.getElementById('members');
const toggleButton = document.getElementById('toggle-view');
const url = 'https://auzfest.github.io/wdd230/chamber/data/member.json';

let isGridView = true;

function renderMembers(data) {
  membersDiv.innerHTML = '';
  data.members.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member');
    memberDiv.innerHTML = `
      <h2>${member.name}</h2>
      <img src="${member.image}" alt="${member.name} Logo" width="100">
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}">${member.name}</a></p>
      <p><strong>Membership Level:</strong> ${member.membership_level}</p>
      <p><strong>Other Information:</strong> ${member.other_information}</p>
    `;
    membersDiv.appendChild(memberDiv);
  });
}

async function GetMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    renderMembers(data);
}

toggleButton.addEventListener('click', function() {
  isGridView = !isGridView;
  if (isGridView) {
    membersDiv.classList.remove('list-view');
    toggleButton.textContent = 'To List View';
  } else {
    membersDiv.classList.add('list-view');
    toggleButton.textContent = 'To Grid View';
  }
});

GetMemberData();