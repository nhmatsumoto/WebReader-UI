export default function Record() {

    const data = {
        title: "Teste",
        description: "Teste",
        start: "2022-09-03T02:44:10.093",
        end: "2022-09-25T02:44:10.093",
        fullCycle: 22,
        images: [
          {
            date: "2022-09-03T02:54:50.9333333",
            imageUrl: "https://exemple.com/image.png",
            title: "titulo teste imagem",
            description: "descricao teste imagem",
            productionPlanId: "4226ab41-fedd-4467-ad3a-a02ee302441d",
            productionPlan: null,
            id: "11d8fefa-69b6-4f87-a31a-1153b829f5a3",
            insertTimestamp: "2022-09-03T02:54:50.9333333",
            updateTimestamp: "2022-09-03T02:54:50.9333333",
            active: true
          }
        ],
        id: "4226ab41-fedd-4467-ad3a-a02ee302441d",
        insertTimestamp: "0001-01-01T00:00:00",
        updateTimestamp: "0001-01-01T00:00:00",
        active: false
      }

      console.log(data);
      
    return(
        <>
            <h1>Formulário de cadastro ProductionPlan</h1>
            <p>{data.title}</p>
        </>
    );
}