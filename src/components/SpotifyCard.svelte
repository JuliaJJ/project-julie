
<script>
import spotifyIcon from '../icons/spotify.svg';
import { useLanyard } from 'svelte-lanyard';
const lanyard = useLanyard('849820804341956619');

let elapsed = 1;
let spotify;

lanyard.subscribe(data => {
   if (!data) return;
   spotify = data.spotify;
});

setInterval(() => {
   if (spotify != null) {
      let songLength = spotify.timestamps.end - spotify.timestamps.start;
      let calcSeconds = Date.now() - spotify.timestamps.start;
      elapsed = calcSeconds / songLength;
      
      // calcSeconds is affected by Date.now().
      // The Spotify API sometimes fails to update its state back to null - so we're adding a failsafe.
      if (elapsed >= 1) elapsed = 1;
   } 
   // should prob reset this, isn't updated out of L7/L23.
   else elapsed = 0;
}, 1000);

</script>

{#if spotify !== null}
   {#if $lanyard}
      <div class="flex bg-sky-50 shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl mb-4 relative hover:bg-white">
         <a href={`https://open.spotify.com/track/`+$lanyard.spotify.track_id} class="inline-block ml-4 mb-2 w-6 absolute top-5 right-5 w-6 hover:fill-sky-900"><img src={spotifyIcon} alt="Spotify" class="hover:fill-sky-900"></a>
         <div class="flex w-full items-start p-5">
            <a href="{`https://open.spotify.com/track/`+$lanyard.spotify.track_id}" class="mr-4 w-48 h-36 border-box"><img class="w-36 h-36 object-cover shadow" src={$lanyard.spotify.album_art_url} alt="media"></a>
            <div class="w-full">
               <div class="flex flex-col w-5/6 justify-between mb-0.5 ">
                  <p class="uppercase text-xs text-gray-400 mb-0.5 tracking-wider">Now Playing</p>
                  <a href="{`https://open.spotify.com/track/`+$lanyard.spotify.track_id}"><h2 class="text-xl font-bold text-gray-900 hover:text-sky-900 -mt-1">{$lanyard.spotify.song}</h2></a>
               </div>
               <p class="flex flex-col w-full text-gray-700 text-md leading-5 mb-2">
                  <span class="uppercase text-xs text-gray-400 tracking-wider">artist </span>{$lanyard.spotify.artist}
               </p>
               <p class="flex flex-col w-full text-gray-700 text-md leading-5 mb-3">
                  <span class="uppercase text-xs text-gray-400 tracking-wider">album </span><span class="italic">{$lanyard.spotify.album}</span>
               </p>
               <div class="flex flex-col w-full bg-slate-300 rounded-full h-2.5 dark:bg-slate-300">
                  <div class="bg-sky-900 h-2.5 rounded-full" style="{`width:`+(elapsed * 100)+`%`}"></div> 
               </div>
            </div>
         </div>
      </div>
      {:else}
      <div class="flex bg-sky-50 shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl mb-4 relative hover:bg-white">
         <div class="flex w-full items-start p-5">
            <p>Loading...</p>
         </div>
      </div>
   {/if}
{:else}
<div class="flex bg-sky-50 shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl mb-4 relative hover:bg-white">
   <div class="flex w-full flex-col items-start p-5">
      <p class="mb-5">I'm not jamming to any bops or bangers at present. But here's a list of my favorites to keep you entertained until I'm back.</p>
      <iframe title="spotify embed" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5TvFJpKrQaxhxd452o0Jcd?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
   </div>
</div>
{/if}
