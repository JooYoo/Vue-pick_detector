<template>
  <v-card>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="cyan darken-2" class="white--text">
            <v-layout>
              <v-flex xs5>
                <div>
                  <button onclick="toggleVideo()" id="isOnVideo" type="button" disabled>Toggle Video</button>
                  <div id="info">{{info}}</div>
                </div>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <canvas id="canvas"></canvas>
                  <video id="video" autoplay="autoplay"></video>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">Rate this album
              <v-spacer></v-spacer>
              <v-icon>star_border</v-icon>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
// import * as handTrack from "handtrackjs";
export default {
 
  data() {
    return {
      info: 'Model loading ...'
    };
  },
  computed:{

  },

  methods: {}
};

// window.addEventListener("load", function(event) {
//   const video = document.getElementById("video");
//   const canvas = document.getElementById("canvas");
//   const context = canvas.getContext("2d");
//   let isOnVideo = document.getElementById("isOnVideo");
//   let info = document.getElementById("info");

//   let isVideo = false;
//   let model = null;

//   const modelParams = {
//     flipHorizontal: true,
//     maxNumBoxes: 20,
//     iouThreshold: 0.1,
//     scoreThreshold: 0.6
//   };

//   // Load model.
//   handTrack.load(modelParams).then(loadModel => {
//     model = loadModel;
//     info.innerText = "Loaded Model!";
//     isOnVideo.disabled = false;
//   });

//   // function toggleVideo() {
//   //   if (!isVideo) {
//   //     info.innerText = "Starting video";
//   //     startVideo();
//   //   } else {
//   //     info.innerText = "Stopping video";
//   //     handTrack.stopVideo(video);
//   //     isVideo = false;
//   //     info.innerText = "Video stopped";
//   //   }
//   // }

//   // function startVideo() {
//   //   handTrack.startVideo(video).then(function(status) {
//   //     if (status) {
//   //       info.innerText = "Video started. Now tracking";
//   //       isVideo = true;
//   //       runDetection();
//   //     } else {
//   //       info.innerText = "Please enable video";
//   //     }
//   //   });
//   // }

//   function runDetection() {
//     model.detect(video).then(predictions => {
//       console.log("Predictions: ", predictions[0]);
//       model.renderPredictions(predictions, canvas, context, video);
//       if (isVideo) {
//         requestAnimationFrame(runDetection);
//       }
//     });
//   }
// });
</script>

<style scoped>
</style>


