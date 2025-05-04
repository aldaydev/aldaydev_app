import './projectSorter.css';

import uparrow_icon from '../../../assets/icons/util-icons/uparrow_icon.svg';
import downarrow_icon from '../../../assets/icons/util-icons/downarrow_icon.svg';

function ProjectSorter ( { selectedSorter, setSelectedSorter }) {

    const sorters = [
        {
            id: "date",
            name: "Fecha",
            class: `projectSorter__sorter ${selectedSorter.sortBy === "date" && "projectSorter__sorter--checked"}`,
        },
        {
            id: "rate",
            name: "Dificultad",
            class: `projectSorter__sorter ${selectedSorter.sortBy === "rate" && "projectSorter__sorter--checked"}`,
        }
    ]

    const handelSelectedSorter = (id) => {
        if(selectedSorter.sortBy === id){
            console.log('Ya está marcando');
            if(selectedSorter.order === 'asc'){
                setSelectedSorter(prev => ({...prev, order: 'desc'}));
            }else if(selectedSorter.order === 'desc'){
                setSelectedSorter(prev => ({...prev, order: 'asc'}));
            }
        }else{
            console.log('No estaba marcado');
            setSelectedSorter({sortBy: id, order: 'desc'});
        }
    }

    const handleOrder = () =>{
        if(selectedSorter.order === 'asc'){
            setSelectedSorter(prev => ({...prev, order: 'desc'}));
        }else if(selectedSorter.order === 'desc'){
            setSelectedSorter(prev => ({...prev, order: 'asc'}));
        }
    }

    return(
        <section className="projectSorter">

            <div className='projectSorter__sortBy'>
                <h4 className="projectSorter__title">Ordenar:</h4>
                <div className='projectSorter__sorters'>
                    {
                        sorters && sorters.map((sorter, index) => {
                            return (
                            <button
                                key={index}
                                className={sorter.class}
                                onClick={()=> handelSelectedSorter(sorter.id)}
                                title={`Ordenar por ${sorter.name} `}
                            >
                                <p className='projectSorter__sorterTitle'>
                                    {sorter.name}
                                </p>
                            </button>
                        )})
                    }
                </div>
            </div>

            <label 
                className='projectSorter__order' 
                htmlFor='orderCheckbox'
                title={`Ordenar ${selectedSorter.order === 'asc' ? 'descendente' : 'ascendente'}`}
            >
                    <input 
                        type='checkbox' 
                        checked={selectedSorter.order === 'asc'}
                        onChange={handleOrder}
                        className='projectSorter__orderCheckbox'
                        id='orderCheckbox'
                    />
                    <span className='projectSorter__icon'></span>
                    <p className='projectSorter__orderText'>{selectedSorter.order === 'asc' ? 'A-Z' : 'Z-A'}</p>
                    <img 
                        src={selectedSorter.order === 'asc' ? downarrow_icon : uparrow_icon}
                        className='projectSorter__orderIcon'
                    />
            </label>
            
            
        </section>
    )

}

export default ProjectSorter;