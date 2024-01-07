function StudentInfo({student}){
  const {name, profileImg, roleId, major, phoneNo, address} = student
  return <div>
    <h1>{name}</h1>
    <img src={profileImg} alt="Profile" />
    <h3>{roleId}</h3>
    <h3>{major}</h3>
    <h3>{phoneNo}</h3>
    <p>{address}</p>
  </div>
}

function App() {

  const students = [
    {id: 1, name: "Anna", profileImg: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww", roleId: "Role-1" , major: "Computer Science", phoneNo: "+95 ........", address : "Yangon"},
    {id: 2, name: "Clover", profileImg: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww", roleId: "Role-10" , major: "Computer Science", phoneNo: "+95 ........", address : "Mandalay"},
  ]
  return (
    <>
      {
        students.map((student) => {
          return <StudentInfo student={student} key={student.id} />
        })
      }
    </>
  );
}


export default App;
