
<script>
import spotifyIcon from '../icons/spotify.svg';
import { useLanyard } from 'svelte-lanyard';
const data = useLanyard('849820804341956619');
</script>

{#if $data}
   <div class="flex bg-sky-50 shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl mb-4 relative hover:bg-white">
      <a href={`https://open.spotify.com/track/`+$data.spotify.track_id} class="inline-block mx-4 mb-2 w-6 absolute top-5 right-5 w-6 hover:fill-sky-900"><img src={spotifyIcon} alt="Spotify"></a>
      <div class="flex w-full items-start p-5">
         <a href="{`https://open.spotify.com/track/`+$data.spotify.track_id}" class="mr-4"><img class="w-24 h-24 object-cover shadow" src={$data.spotify.album_art_url} alt="media"></a>
         <div class="w-full">
            <div class="flex flex-col w-5/6 justify-between mb-1">
               <a href="{`https://open.spotify.com/track/`+$data.spotify.track_id}"><h2 class="text-xl font-bold text-gray-900 hover:text-sky-900 -mt-1">{$data.spotify.song}</h2></a>
            </div>
            <p class="flex flex-col w-full text-gray-700 text-md leading-6 mb-3">
               <span class="uppercase text-xs text-gray-400">artist </span>{$data.spotify.artist}<br />
               <span class="uppercase text-xs text-gray-400">album </span><span class="italic">{$data.spotify.album}</span></p>
            <div class="flex flex-col w-full bg-slate-300 rounded-full h-2.5 dark:bg-slate-300">
               <div class="bg-sky-900 h-2.5 rounded-full" style="width: 45%"></div>
            </div>
         </div>
      </div>
   </div>
   {:else}
   <!-- -->
{/if}


<!-- <div>
   <script>
      // loop to constantly update the details of the activities even if no change was made (for example, time elapsed)
      var i = 1;

      function loop() {
          setTimeout(function() {
              updatepresence();
              
              i++;
              if (i < 10) {
                  loop();
              }
          }, 4000)
      }

      loop();
  </script>
</div> -->