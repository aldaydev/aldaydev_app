import './projectSorter.css';

function ProjectSorter () {

    return(
        <section className="projectSorter">
            <h4 className="projectSorter__title">Ordenar por:</h4>
            <div className='projectSorter__sorters'>
                <button className="projectSorter__sorter">
                    Fecha
                </button>
                <button className="projectSorter__sorter">
                    Dificultad
                </button>
            </div>
            
        </section>
    )

}

export default ProjectSorter;