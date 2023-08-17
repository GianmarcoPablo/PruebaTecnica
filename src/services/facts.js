const CAT_ENPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
export const getRandomFact = async () => {
    const respuesta = await fetch(CAT_ENPOINT_RANDOM_FACT);
    const resultado = await respuesta.json();
    const { fact } = resultado;
    return fact;
};
