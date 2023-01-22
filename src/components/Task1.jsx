import React, { useState } from 'react'
export default function Task1() {
        const [obj, setObj] = useState({
            'prop1': 'value1',
            'prop2': 'value2',
            'prop3': 'value3'
        });
        const [editId, setEditId] = useState('');
	const initNotes = [
		{id:1, name:'prod1',catg:'catg1',cost:100},
        {id:2, name:'prod2',catg:'catg2',cost:200},
        {id:3, name:'prod3',catg:'catg3',cost:300},
	];
	const [notes, setNotes] = useState(initNotes);
    function id(){}
	const res = notes.map(note => {
		return <p key={note.id}>
			<span>{note.name}</span>
			<span>{note.catg}</span>
			<span>{note.cost}</span>
			<button type= 'button' onClick={() => setEditId(note.id)} id>Редактировать</button>
		</p>;
	});
	function getValue(prop) {
		return notes.reduce((res, note) => note.id === editId ? note[prop] : res, '');
	}
	function changeItem(prop, event) {
		setNotes(notes.map(note =>
			note.id === editId ? {...notes, [prop]: event.target.value} : note
		));
	}
        const [inputName,setInputName] = useState('')
        const [inputCatg,setInputCatg] = useState('')
        const [inputCost,setInputCost] = useState('')
        function remItem(id){
            setNotes(notes.filter(note => note.id !== id))
        }
        function addItem(){
            let arr = {id, name:inputName,catg:inputCatg,cost:inputCost};
            setNotes([...notes,arr])
        }
        const result = notes.map(note => {
		return <>
        <tr key={note.id}>
            <td>
            {note.id}
            </td>
            <td>
            {note.name}
            </td>
            <td>
            {note.catg}
            </td>
            <td>
            {note.cost}
            </td>
            <td>
            <button onClick={()=>{remItem(note.id)}}>Удалить</button>
            </td>
            <td>
            </td>
        </tr>
        </>
	});
        return ( <form>
            <fieldset>
                <legend>Практическое задание</legend>
            <p>{obj.prop1}</p>
            <button type = 'button' onClick={()=>setObj({...obj,...{prop1:'!'}})}>Изменить prop1</button>
            <p>{obj.prop2}</p>
            <button type = 'button' onClick={()=>setObj({...obj,...{prop2:'!'}})}>Изменить prop2</button>
            <p>{obj.prop3}</p>
            <button type = 'button' onClick={()=>setObj({...obj,...{prop3:'!'}})}>Изменить prop3</button>
            <table>
                {result}
            </table>
            <label>Название:</label>
            <input type="text" value = {inputName} onChange={(event)=>setInputName(event.target.value)} />
            <br />
            <label>Категория:</label>
            <input type="text" value = {inputCatg} onChange={(event)=>setInputCatg(event.target.value)} />
            <br />
            <label>Стоимость:</label>
            <input type = 'number' value = {inputCost} onChange={(event)=>setInputCost(event.target.value)} />
            <br />
            <button type = 'button' onClick={()=>{addItem()}}>Сохранить</button>
            <br />
            {res}
		<br />
		<input type="text"value={getValue('name')}onChange={event => changeItem('name', event)}/>
		<br />
		<input  type="text" value={getValue('catg')} onChange={event => changeItem('catg', event)}/>
		<br />
		<input  type="number" value={getValue('cost')} onChange={event => changeItem('cost', event)}/>
		<br />
		<button type= 'button' onClick={() => setEditId(null)}>Сохранить</button>
            </fieldset>
        </form>       
)
} 