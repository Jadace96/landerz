const featureItemsData = [
  {
    id: "businessConsulting",
    title: "Business Consulting",
    src: "./assets/images/bussness.png",
    paragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit.`
  },
  {
    id: "marketAnalysis",
    title: "Market Analysis",
    src: "./assets/images/market_analysis.png",
    paragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit.`
  },
  {
    id: "userMonitor",
    title: "User Monitor",
    src: "./assets/images/user_monitor.png",
    paragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit.`
  },
  {
    id: "insuranceConsulting",
    title: "Insurance Consulting",
    src: "./assets/images/insurance_consulting.png",
    paragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit.`
  },
  {
    id: "customerSatistified",
    title: "Customer Satistified",
    src: "./assets/images/customer_satistified.png",
    paragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit.`
  },
  {
    id: "plug&Play",
    title: "Plug & Play",
    src: "./assets/images/plug_and_play.png",
    paragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit.`
  }
];

class FeatureItem extends HTMLElement {
  connectedCallback() {
    featureItemsData.forEach(
      ({ title, paragraph, src, id }) =>
        (this.innerHTML += `
          <div id="${id}" class="feature-item-container">      
            <img class="feature-item-img" src=${src}>
            <h3 class="feature-item-title">${title}</h3>      
            <p>${paragraph}</p>
            <button class="learn-more-text-button"> Learn more </button>
          </div>
        `)
    );
  }
}

window.customElements.define("feature-item", FeatureItem);