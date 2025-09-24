import React, { createContext, useContext } from 'react';

const productos = [
  {
    id: 1,
    image: "https://2.bp.blogspot.com/-V5dLqgYFa_U/U5TSf2UtaHI/AAAAAAAAA68/t6PDoFOdnCA/s1600/0000000302_1.jpg",
    title: "Remera Entrenamiento",
    description: "Diseñada para acompañarte en cada entrenamiento, combina comodidad, rendimiento y estilo deportivo. Confeccionada en tejido técnico de microfibra respirable, mantiene el cuerpo seco incluso en las sesiones más intensas",
    price: "$70000",
    category: "Camisetas"
  },
  {
    id: 2,
    image: "https://d22fxaf9t8d39k.cloudfront.net/dfdaf69966ae728cf9802dba106db543ef11e65f290ddc9837942affcbbf83c077067.jpeg",
    title: "Remera Partidos",
    description: "Confeccionada en tela de alto rendimiento, absorbe el sudor y permite que el cuerpo respire, manteniéndote seco y cómodo durante todo el entrenamiento. El fit atlético y el diseño sin restricciones te dan libertad total para moverte, lanzar y defender sin límites.",
    price: "$72000",
    category: "Camisetas"
  },
  {
    id: 3,
    image: "https://images-na.ssl-images-amazon.com/images/I/71NSuB7TIlL._SL1500_.jpg",
    title: "Pelota Kempa",
    description: "Su superficie de PU de alta calidad brinda un grip óptimo con o sin resina, mientras que su estructura multicapa garantiza durabilidad y rebote controlado. El diseño ergonómico y el peso balanceado la convierten en la compañera ideal para entrenamientos de alto nivel o competencia.",
    price: "$50000",
    category: "Pelotas"
  },
  {
    id: 4,
    image: "https://www.deportesmd.com.ar/sistema/uploads/699/articulos/molten-n3-handball.jpg",
    title: "Pelota Molten",
    description: "Su cubierta de cuero sintético de última generación brinda un tacto suave pero firme, que mejora el control en velocidad, con o sin resina. La estructura interna con cámara de látex ofrece retención de aire de alto nivel, asegurando estabilidad y consistencia en cada pase y lanzamiento.",
    price: "$40000",
    category: "Pelotas"
  },
  {
    id: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_744804-MLA82891379213_032025-O.webp",
    title: "Zapatillas Kempa",
    description: "La parte superior está fabricada con materiales transpirables y refuerzos estratégicos que brindan soporte en los cambios rápidos de dirección, sin sacrificar comodidad. Además, la entresuela de EVA proporciona amortiguación reactiva, ideal para saltos, desplazamientos y aterrizajes explosivos.",
    price: "$90000",
    category: "Zapatillas"
  },
  {
    id: 6,
    image: "https://http2.mlstatic.com/D_NQ_NP_935624-MLA51786345540_102022-O.webp",
    title: "Zapatillas Asics",
    description: "La suela de goma de alta adherencia proporciona tracción firme en superficies indoor, mientras que el diseño del upper de malla reforzada mantiene tus pies frescos, seguros y estables incluso en los partidos más intensos.",
    price: "$80000",
    category: "Zapatillas"
  },
  {
    id: 7,
    image: "https://imcolmedica.com.co/wp-content/uploads/2022/03/566.png",
    title: "Venda elastica",
    description: "Fabricada con una mezcla de algodón, poliéster y elastano, su material es resistente, respirable y lavable, adaptándose perfectamente al cuerpo sin perder elasticidad con el uso.",
    price: "$4000",
    category: "Medias y Vendas"
  },
  {
    id: 8,
    image: "https://zeusdeportes.com.ar/wp-content/uploads/2025/03/MEDIAS-HANDBALL-COMPRESION-123825-1238250-2.jpg",
    title: "Medias deportivas",
    description: "Estas medias negras están diseñadas para ofrecer comodidad, soporte y durabilidad durante toda tu rutina deportiva. Fabricadas con materiales técnicos que permiten una excelente transpiración y absorción de humedad, mantienen tus pies secos y frescos en cada entrenamiento o partido.",
    price: "$10000",
    category: "Medias y Vendas"
  }
];


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ productos }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
