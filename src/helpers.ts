export const welcomeMessage = (name: string, date: Date):string => `Hello there ${name}, it is ${date}`;

export const printName = (obj: { first: string; last?: string }) => {
    // A safe alternative using modern JavaScript syntax:
    console.log(`First name: ${obj.first}`);
    console.log(`Last name: ${obj.last?.toUpperCase()}`);
}

//multiply types example
export const printid = (id: string | number) => console.log(`Your id: ${id}`)