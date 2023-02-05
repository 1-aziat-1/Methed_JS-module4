console.log('----------------------------------1-----------------------------------');
{const filter = (allstudent, badStudent) => {
  result = []
  allstudent.forEach(itemAll => {
    for (let i = 0; i<badStudent.length; i++) {
      if (itemAll === badStudent[i]) return;
    }
    result.push(itemAll);
  });
  return result;
};

const allstudent = ['Иванов', 'Сидоров', 'Кузнецов', 'Емельянов', 'Попов'];
const badStudent = ['Кузнецов', 'Емельянов'];

console.log(filter(allstudent, badStudent));}