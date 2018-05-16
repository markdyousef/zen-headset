# Zen Headset
## Components

#### OpenBCI - Cyton
##### DataStream
##### Controls
##### Callibration / ML

#### Google Cloud Platform
##### Pub/Sub
Topics:
* `headset_data`,
* `headset_controls`,
* `headset_model`

##### Cloud Function
Format and store data in BigQuery
* trigger-topic=`headset_data`

##### BigQuery
Dataset:
* `headset_dev`

Tables:
* `data_stream`


## Local Development (Dev/Test)
### PubSub Local Emulator
#### 1. Docker Image
Pull image and run container

    docker build -t insai/pubsub-emulator
    docker run --rm -p "8085:8085" insai/pubsub-emulator

#### 2. gcloud emulator 
* [gcloud Docs](https://cloud.google.com/pubsub/docs/emulator)

Install gcloud **PubSub Emulator**

    gcloud components install pubsub-emulator
    gcloud components update

Connect to emulator

    gcloud beta emulators pubsub start [options]
    gcloud beta emulators pubsub env-init
    export PUBSUB_EMULATOR_HOST="localhost:8085"

### Cloud Functions Local Emulator
* [gcloud Docs](https://cloud.google.com/functions/docs/emulator)

Install gcloud **Functions Emulator**

    npm install -g @google-cloud/functions-emulator
    functions --help

Start emulator:

    functions start

Deploy function:

    functions deploy saveHeadsetData --trigger-topic=headset_data --source=./src/cloud/headset-cf

#### Troubleshooting
If you have trouble after upgrading, try deleting the config
directory found in:

    ~/.config/configstore/@google-cloud/functions-emulator

Then restart the emulator. You can also check for any renegade
Node.js emulator processes that may need to be killed:

    ps aux | grep node