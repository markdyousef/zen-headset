# Backend

## Test Environment
### PubSub Local Emulator

#### 1. Docker Image (Root Directory)
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
___
#### Cloud Functions Local Emulator
* [gcloud Docs](https://cloud.google.com/functions/docs/emulator)

Install gcloud **Functions Emulator**

    npm install -g @google-cloud/functions-emulator
    functions --help

Start emulator:

    functions start

Deploy function:

    functions deploy saveHeadsetData --trigger-topic=headset_data --source=./src/cloud/headset-cf

Call function:

    functions call saveHeadsetData --data=DATA

See function logs:

    functions logs read --limit=20

##### Troubleshooting
If you have trouble after upgrading, try deleting the config
directory found in:

    ~/.config/configstore/@google-cloud/functions-emulator

Then restart the emulator. You can also check for any renegade
Node.js emulator processes that may need to be killed:

    ps aux | grep node

## Google Cloud Platform
#### Pub/Sub
* Topics: `headset_data`, `headset_controls`, `headset_model`

#### Cloud Function
* trigger-topic=`headset_data`

#### BigQuery
Datasets:
* `headset_dev`
* `headset_test`

Tables:
* `cyton_data`

## Deployment
### Cloud Functions
    
    gcloud beta functions deploy saveHeadsetData --trigger-topic=headset_data --source=./src/cloud/headset-cf