let vacancies = [];

function options() {
  return prompt(`Seja bem vindo ao nosso sistema!
  \nO que você gostaria de fazer?\n
    \n1.Listar Vagas
    \n2.Criar uma nova vaga
    \n3.Visualizar uma vaga
    \n4.Inscrever um candidato em uma vaga
    \n5.Excluir uma vaga
    \n6.Sair`);
}

function listVacancies() {
  alert(
    vacancies
      .map((value, index) => {
        return (
          '\nÍndice da vaga:' +
          index +
          '\nNome da vaga: ' +
          value.vacancyName +
          '\nNúmero de candidatos: ' +
          value.candidatesNumber
        );
      })
      .join('\n')
  );
}

function createNewVacancy() {
  let newVacancyName = prompt('Por favor, insira um nome para a nova vaga.');
  let newVacancyDescription = prompt(
    'Por favor, insira uma descrição para a nova vaga.'
  );
  let newVacancyLimitDate = prompt(
    'Por favor, insira uma data limite para a nova vaga.[yyyy]'
  );

  let confirmation = confirm(
    'Tem certeza que quer adicionar esta vaga?\n' +
      'Nome da vaga: ' +
      newVacancyName +
      '\nDescrição: ' +
      newVacancyDescription +
      '\nData limite: ' +
      newVacancyLimitDate
  );

  if (confirmation) {
    const vacancy = {
      vacancyName: newVacancyName,
      description: newVacancyDescription,
      limitDate: newVacancyLimitDate,
      candidates: [],
      candidatesNumber: 0,
    };
    vacancies.push(vacancy);
  }
}

function showOneVacancy() {
  let index = Number(prompt('Por favor, poderia informar o índice da vaga?'));
  let vacancy = vacancies[index];

  alert(
    `Esta é a vaga que você pediu:\nÍndice da Vaga: ${index}\nNome: ${
      vacancy.vacancyName
    }\nDescrição: ${vacancy.description}\nData Limite: ${
      vacancy.limitDate
    }\nQuantidade de candidatos: ${
      vacancy.candidatesNumber
    }\nCandidatos: ${vacancy.candidates.join(',')}`
  );
}

function createCandidate() {
  let candidate = prompt('Informe o nome do candidato(a): ');
  let index = Number(prompt('Por favor, poderia informar o índice da vaga?'));
  let vacancy = vacancies[index];

  let confirmation = confirm(
    'Tem certeza que quer inscrever este candidato nesta vaga?\n' +
      'Nome do candidato: ' +
      candidate +
      '\nÍndice da vaga: ' +
      index
  );

  if (confirmation) {
    vacancy.candidatesNumber++;
    vacancy.candidates.push(candidate);
    alert('Inscrição realizada');
  }
}

function removeVacancy() {
  let index = Number(prompt('Por favor, poderia informar o índice da vaga?'));

  let confirmation = confirm(
    'Tem certeza que quer remover esta vaga?\n' + '\nÍndice da vaga: ' + index
  );
  if (confirmation) {
    vacancies.splice(index, 1);
  }
}
function executeSoftware() {
  let menu = '';
  do {
    menu = options();

    switch (menu) {
      case '1':
        listVacancies();
        break;
      case '2':
        createNewVacancy();
        break;
      case '3':
        showOneVacancy();
        break;
      case '4':
        createCandidate();
        break;
      case '5':
        removeVacancy();
        break;
      case '6':
        alert('Saindo...');
        break;
    }
  } while (menu !== '6');
}

executeSoftware();
