function Cards({ name, image, departments, movies }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <div className="badges">
        {departments.map((dep, i) => (
          <span key={i} className="badge">{dep}</span>
        ))}
      </div>

      <div className="card-info">
        <h3>{name}</h3>
        <p>{movies} movies</p>
      </div>
    </div>
  )
}

export default Cards
