const apiKey = 'a4999a28333d1147dbac0d104526337a';

export default{
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${apiKey}&language=en-US`,
    },
    fetchTopratedMovie:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${apiKey}&language=en-US`
    }
    
}