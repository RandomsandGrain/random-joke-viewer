export default ({joke, loading, error, apiCall}) => {
    return (<div>
            {error ? <h1>Error, Please Refresh Page.</h1> : loading ? <h1>Loading</h1> : <>
    <h1>{joke.setup}</h1>
<p>{joke.punchline}</p>
    </>}

<button onClick={() => apiCall()}>Next Joke</button>
    </div>
    )
}