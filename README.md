# personajes de rickan y morty

## Introduction

proyecto  desarrollado con react  typescript , css html   redux, redux toolkit

## Code Samples

  const filter = (event: React.FormEvent<HTMLInputElement>) => {
    var text = event.currentTarget.value;
    const data = characterList;
    const newData = data?.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setTextNew(newData);
    setText(text);
    setContentMain(false);
    setContentSearch(true);

    if (text === "") {
      setContentMain(true);
      setContentSearch(false);
    }
  };


## Installation

el proyecto se instala, copiando el repositorio para un git clone ,
eventualmente se hace un npm install para los paquetes correspondiente del programa 
finalmente se ejecuta con npm start en el localhost//3000
