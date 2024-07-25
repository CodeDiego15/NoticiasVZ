// src/app/page.js
'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { fetchNews } from '../utils/fetchNews';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewsCard = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background: #333333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const NewsTitle = styled.h2`
  margin: 0 0 10px;
`;

const NewsDescription = styled.p`
  margin: 0;
`;

const NewsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Message = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background: #ffcccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
`;

const MessageImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('deportes');

  const loadNews = async (category) => {
    const newsData = await fetchNews(category);
    setNews(newsData);
  };

  useEffect(() => {
    loadNews(category);
  }, [category]);

  return (
    <Container>
      <Header onCategoryChange={setCategory} />
      <Message>
        <MessageImage src="/edmundo.webp" alt="Edmundo González" />
        ¡Hola, Venezuela!
      <br />
Soy un joven de 15 años, y estoy apoyando a Edmundo González. ¡Salgan a votar! Muchos jóvenes como yo nos iremos del país si Maduro gana, y no queremos dejar nuestra casa, nuestros amigos y nuestra familia.
    <br />
Queremos un futuro mejor aquí, en nuestra tierra. Tenemos sueños y esperanzas, y creemos que podemos hacer que Venezuela sea un lugar de oportunidades para todos.
    <br />
¡Vamos todos juntos a votar por el cambio! No dejemos que nuestros sueños se apaguen. ¡Vota por un futuro mejor! ¡Vota por Edmundo González!
    <br />
¡Juntos podemos lograrlo!
      </Message>
      {news.map((article, index) => (
        article.urlToImage && ( // Asegurarnos de que solo se muestren noticias con imágenes
          <NewsCard key={index}>
            <NewsImage src={article.urlToImage} alt={article.title} />
            <NewsTitle>{article.title}</NewsTitle>
            <NewsDescription>{article.description}</NewsDescription>
          </NewsCard>
        )
      ))}
    </Container>
  );
};

export default HomePage;
