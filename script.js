const projects = [
  {
    name: "four-card-feature",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/four-card-feature",
  },
  {
    name: "base-apparel-page",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/base-apparel-page",
  },
  {
    name: "signup-form",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/signup-form",
  },
  {
    name: "single-price-grid-component",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/single-price-grid-component",
  },
  {
    name: "ping-coming-soon-page",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/ping-coming-soon-page",
  },
  {
    name: "huddle-landing-page-with-alternating-feature-blocks",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/huddle-landing-page-with-alternating-feature-blocks",
  },
  {
    name: "huddle-landing-page-with-single-introductory-section-master",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/huddle-landing-page-with-single-introductory-section-master",
  },
  {
    name: "fylo-landing-page-with-two-column-layout-master",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/fylo-landing-page-with-two-column-layout-master",
  },
  {
    name: "insure-landing-page-master",
    github:
      "https://github.com/afrazchelsea/frontend-mentor-challenges/tree/master/insure-landing-page-master",
  },
];

// github: "https://github.com/afrazchelsea/frontend-mentor-challenges",

const list = document.getElementById("list");

projects.forEach(({ name, github }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${github}" class="github">
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
