import { Card } from "components/Card/index";
import { Container } from "components/Container";
import { useState } from "react";


function App() {
  const [componentsData] = useState([{
    card: [{
      category: "Perfume",
      title: "Gabrielle Essence Eau de Parfum",
      description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
      price: "$149.99",
      prevPrice: "$169.99",
      pathImageDesktop: "CardAssets/image-product-desktop.jpg",
      pathImageMobile: "CardAssets/image-product-mobile.jpg",
    }]
  }]);

  return (
    <Container>
      <Card data={componentsData} />
    </Container>
  );
}

export default App;
