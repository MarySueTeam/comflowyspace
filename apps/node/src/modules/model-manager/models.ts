export default {
    "models": [
      {
        "name": "TAESDXL Decoder",
        "type": "TAESD",
        "base": "SDXL",
        "save_path": "vae_approx",
        "description": "(SDXL Verison) To view the preview in high quality while running samples in ComfyUI, you will need this model.",
        "reference": "https://github.com/madebyollin/taesd",
        "filename": "taesdxl_decoder.pth",
        "url": "https://github.com/madebyollin/taesd/raw/main/taesdxl_decoder.pth"
      },
      {
        "name": "TAESDXL Encoder",
        "type": "TAESD",
        "base": "SDXL",
        "save_path": "vae_approx",
        "description": "(SDXL Verison) To view the preview in high quality while running samples in ComfyUI, you will need this model.",
        "reference": "https://github.com/madebyollin/taesd",
        "filename": "taesdxl_encoder.pth",
        "url": "https://github.com/madebyollin/taesd/raw/main/taesdxl_encoder.pth"
      },
      {
        "name": "TAESD Decoder",
        "type": "TAESD",
        "base": "SD1.x",
        "save_path": "vae_approx",
        "description": "To view the preview in high quality while running samples in ComfyUI, you will need this model.",
        "reference": "https://github.com/madebyollin/taesd",
        "filename": "taesd_decoder.pth",
        "url": "https://github.com/madebyollin/taesd/raw/main/taesd_decoder.pth"
      },
      {
        "name": "TAESD Encoder",
        "type": "TAESD",
        "base": "SD1.x",
        "save_path": "vae_approx",
        "description": "To view the preview in high quality while running samples in ComfyUI, you will need this model.",
        "reference": "https://github.com/madebyollin/taesd",
        "filename": "taesd_encoder.pth",
        "url": "https://github.com/madebyollin/taesd/raw/main/taesd_encoder.pth"
      },
      {
        "name": "RealESRGAN x2",
        "type": "upscale",
        "base": "upscale",
        "save_path": "default",
        "description": "RealESRGAN x2 upscaler model",
        "reference": "https://huggingface.co/sberbank-ai/Real-ESRGAN",
        "filename": "RealESRGAN_x2.pth",
        "url": "https://huggingface.co/sberbank-ai/Real-ESRGAN/resolve/main/RealESRGAN_x2.pth"
      },
      {
        "name": "RealESRGAN x4",
        "type": "upscale",
        "base": "upscale",
        "save_path": "default",
        "description": "RealESRGAN x4 upscaler model",
        "reference": "https://huggingface.co/sberbank-ai/Real-ESRGAN",
        "filename": "RealESRGAN_x4.pth",
        "url": "https://huggingface.co/sberbank-ai/Real-ESRGAN/resolve/main/RealESRGAN_x4.pth"
      },
      {
        "name": "4x-UltraSharp",
        "type": "upscale",
        "base": "upscale",
        "save_path": "default",
        "description": "4x-UltraSharp upscaler model",
        "reference": "https://upscale.wiki/wiki/Model_Database",
        "filename": "4x-UltraSharp.pth",
        "url": "https://huggingface.co/datasets/Kizi-Art/Upscale/resolve/fa98e357882a23b8e7928957a39462fbfaee1af5/4x-UltraSharp.pth"
      },
      {
        "name": "Inswapper (face swap)",
        "type": "insightface",
        "base" : "inswapper",
        "save_path": "insightface",
        "description": "Checkpoint of the insightface swapper model (used by Comfy-Roop and comfy_mtb)",
        "reference": "https://huggingface.co/deepinsight/inswapper/",
        "filename": "inswapper_128.onnx",
        "url": "https://huggingface.co/deepinsight/inswapper/resolve/main/inswapper_128.onnx"
      },
      {
        "name": "Deepbump",
        "type": "deepbump",
        "base": "deepbump",
        "save_path": "deepbump",
        "description": "Checkpoint of the deepbump model to generate height and normal maps textures from an image (requires comfy_mtb)",
        "reference": "https://github.com/HugoTini/DeepBump",
        "filename": "deepbump256.onnx",
        "url": "https://github.com/HugoTini/DeepBump/raw/master/deepbump256.onnx"
      },  
      {
        "name": "GFPGAN 1.3",
        "type": "face_restore",
        "base": "face_restore",
        "save_path": "face_restore",
        "description": "Face restoration",
        "reference": "https://github.com/TencentARC/GFPGAN",
        "filename": "GFPGANv1.3.pth",
        "url": "https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth"
      },
      {
        "name": "GFPGAN 1.4",
        "type": "face_restore",
        "base": "face_restore",
        "save_path": "face_restore",
        "description": "Face restoration",
        "reference": "https://github.com/TencentARC/GFPGAN",
        "filename": "GFPGANv1.4.pth",
        "url": "https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth"
      },      
      {
        "name": "RestoreFormer",
        "type": "face_restore",
        "base": "face_restore",
        "save_path": "face_restore",
        "description": "Face restoration",
        "reference": "https://github.com/TencentARC/GFPGAN",
        "filename": "RestoreFormer.pth",
        "url": "https://github.com/TencentARC/GFPGAN/releases/download/v1.3.4/RestoreFormer.pth"
      },
      {
        "name": "Stable Video Diffusion Image-to-Video",
        "type": "checkpoints",
        "base": "SVD",
        "save_path": "checkpoints/SVD",
        "description": "Stable Video Diffusion (SVD) Image-to-Video is a diffusion model that takes in a still image as a conditioning frame, and generates a video from it.<BR>NOTE: 14 frames @ 576x1024",
        "reference": "https://huggingface.co/stabilityai/stable-video-diffusion-img2vid",
        "filename": "svd.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-video-diffusion-img2vid/resolve/main/svd.safetensors"
      },
      {
        "name": "Stable Video Diffusion Image-to-Video (XT)",
        "type": "checkpoints",
        "base": "SVD",
        "save_path": "checkpoints/SVD",
        "description": "Stable Video Diffusion (SVD) Image-to-Video is a diffusion model that takes in a still image as a conditioning frame, and generates a video from it.<BR>NOTE: 25 frames @ 576x1024 ",
        "reference": "https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt",
        "filename": "svd_xt.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt/resolve/main/svd_xt.safetensors"
      },
      {
        "name": "negative_hand Negative Embedding",
        "type": "embeddings",
        "base": "SD1.5",
        "save_path": "default",
        "description": "If you use this embedding with negatives, you can solve the issue of damaging your hands.",
        "reference": "https://civitai.com/models/56519/negativehand-negative-embedding",
        "filename": "negative_hand-neg.pt",
        "url": "https://civitai.com/api/download/models/60938"
      },
      {
        "name": "bad_prompt Negative Embedding",
        "type": "embeddings",
        "base": "SD1.5",
        "save_path": "default",
        "description": "The idea behind this embedding was to somehow train the negative prompt as an embedding, thus unifying the basis of the negative prompt into one word or embedding.",
        "reference": "https://civitai.com/models/55700/badprompt-negative-embedding",
        "filename": "bad_prompt_version2-neg.pt",
        "url": "https://civitai.com/api/download/models/60095"
      },
      {
        "name": "Deep Negative V1.75",
        "type": "embeddings",
        "base": "SD1.5",
        "save_path": "default",
        "description": "These embedding learn what disgusting compositions and color patterns are, including faulty human anatomy, offensive color schemes, upside-down spatial structures, and more. Placing it in the negative can go a long way to avoiding these things.",
        "reference": "https://civitai.com/models/4629/deep-negative-v1x",
        "filename": "ng_deepnegative_v1_75t.pt",
        "url": "https://civitai.com/api/download/models/5637"
      },
      {
        "name": "EasyNegative",
        "type": "embeddings",
        "base": "SD1.5",
        "save_path": "default",
        "description": "This embedding should be used in your NEGATIVE prompt. Adjust the strength as desired (seems to scale well without any distortions), the strength required may vary based on positive and negative prompts.",
        "reference": "https://civitai.com/models/7808/easynegative",
        "filename": "easynegative.safetensors",
        "url": "https://civitai.com/api/download/models/9208"
      },
      {
        "name": "sd_xl_base_1.0_0.9vae.safetensors",
        "type": "checkpoints",
        "base": "SDXL",
        "save_path": "default",
        "description": "Stable Diffusion XL base model (VAE 0.9)",
        "reference": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
        "filename": "sd_xl_base_1.0_0.9vae.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0_0.9vae.safetensors"
      },
      {
        "name": "sd_xl_base_1.0.safetensors",
        "type": "checkpoints",
        "base": "SDXL",
        "save_path": "default",
        "description": "Stable Diffusion XL base model",
        "reference": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
        "filename": "sd_xl_base_1.0.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors"
      },
      {
        "name": "sd_xl_refiner_1.0_0.9vae.safetensors",
        "type": "checkpoints",
        "base": "SDXL",
        "save_path": "default",
        "description": "Stable Diffusion XL refiner model (VAE 0.9)",
        "reference": "https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0",
        "filename": "sd_xl_refiner_1.0_0.9vae.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0_0.9vae.safetensors"
      },
      {
        "name": "stable-diffusion-xl-refiner-1.0",
        "type": "checkpoints",
        "base": "SDXL",
        "save_path": "default",
        "description": "Stable Diffusion XL refiner model",
        "reference": "https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0",
        "filename": "sd_xl_refiner_1.0.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors"
      },
      {
        "name": "diffusers/stable-diffusion-xl-1.0-inpainting-0.1 (UNET/fp16)",
        "type": "unet",
        "base": "SDXL",
        "save_path": "unet/xl-inpaint-0.1",
        "description": "[5.14GB] Stable Diffusion XL inpainting model 0.1. You need UNETLoader instead of CheckpointLoader.",
        "reference": "https://huggingface.co/diffusers/stable-diffusion-xl-1.0-inpainting-0.1",
        "filename": "diffusion_pytorch_model.fp16.safetensors",
        "url": "https://huggingface.co/diffusers/stable-diffusion-xl-1.0-inpainting-0.1/resolve/main/unet/diffusion_pytorch_model.fp16.safetensors"
      },
      {
        "name": "diffusers/stable-diffusion-xl-1.0-inpainting-0.1 (UNET)",
        "type": "unet",
        "base": "SDXL",
        "save_path": "unet/xl-inpaint-0.1",
        "description": "[10.3GB] Stable Diffusion XL inpainting model 0.1. You need UNETLoader instead of CheckpointLoader.",
        "reference": "https://huggingface.co/diffusers/stable-diffusion-xl-1.0-inpainting-0.1",
        "filename": "diffusion_pytorch_model.safetensors",
        "url": "https://huggingface.co/diffusers/stable-diffusion-xl-1.0-inpainting-0.1/resolve/main/unet/diffusion_pytorch_model.safetensors"
      },
      {
        "name": "sd_xl_offset_example-lora_1.0.safetensors",
        "type": "lora",
        "base": "SDXL",
        "save_path": "default",
        "description": "Stable Diffusion XL offset LoRA",
        "reference": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
        "filename": "sd_xl_offset_example-lora_1.0.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_offset_example-lora_1.0.safetensors"
      },
      {
        "name": "v1-5-pruned-emaonly.ckpt",
        "type": "checkpoints",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Stable Diffusion 1.5 base model",
        "reference": "https://huggingface.co/runwayml/stable-diffusion-v1-5",
        "filename": "v1-5-pruned-emaonly.ckpt",
        "url": "https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.ckpt"
      },
      {
        "name": "v2-1_512-ema-pruned.safetensors",
        "type": "checkpoints",
        "base": "SD2",
        "save_path": "default",
        "description": "Stable Diffusion 2 base model (512)",
        "reference": "https://huggingface.co/stabilityai/stable-diffusion-2-1-base",
        "filename": "v2-1_512-ema-pruned.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-2-1-base/resolve/main/v2-1_512-ema-pruned.safetensors"
      },
      {
        "name": "v2-1_768-ema-pruned.safetensors",
        "type": "checkpoints",
        "base": "SD2",
        "save_path": "default",
        "description": "Stable Diffusion 2 base model (768)",
        "reference": "https://huggingface.co/stabilityai/stable-diffusion-2-1",
        "filename": "v2-1_768-ema-pruned.safetensors",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-2-1/resolve/main/v2-1_768-ema-pruned.safetensors"
      },
      {
        "name": "AbyssOrangeMix2 (hard)",
        "type": "checkpoints",
        "base": "SD1.5",
        "save_path": "default",
        "description": "AbyssOrangeMix2 - hard version (anime style)",
        "reference": "https://huggingface.co/WarriorMama777/OrangeMixs",
        "filename": "AbyssOrangeMix2_hard.safetensors",
        "url": "https://huggingface.co/WarriorMama777/OrangeMixs/resolve/main/Models/AbyssOrangeMix2/AbyssOrangeMix2_hard.safetensors"
      },
      {
        "name": "AbyssOrangeMix3 A1",
        "type": "checkpoints",
        "base": "SD1.5",
        "save_path": "default",
        "description": "AbyssOrangeMix3 - A1 (anime style)",
        "reference": "https://huggingface.co/WarriorMama777/OrangeMixs",
        "filename": "AOM3A1_orangemixs.safetensors",
        "url": "https://huggingface.co/WarriorMama777/OrangeMixs/resolve/main/Models/AbyssOrangeMix3/AOM3A1_orangemixs.safetensors"
      },
      {
        "name": "AbyssOrangeMix3 A3",
        "type": "checkpoints",
        "base": "SD1.5",
        "save_path": "default",
        "description": "AbyssOrangeMix - A3 (anime style)",
        "reference": "https://huggingface.co/WarriorMama777/OrangeMixs",
        "filename": "AOM3A3_orangemixs.safetensors",
        "url": "https://huggingface.co/WarriorMama777/OrangeMixs/resolve/main/Models/AbyssOrangeMix3/AOM3A3_orangemixs.safetensors"
      },
      {
        "name": "Anything v3 (fp16; pruned)",
        "type": "checkpoints",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Anything v3 (anime style)",
        "reference": "https://huggingface.co/Linaqruf/anything-v3.0",
        "filename": "anything-v3-fp16-pruned.safetensors",
        "url": "https://huggingface.co/Linaqruf/anything-v3.0/resolve/main/anything-v3-fp16-pruned.safetensors"
      },
      {
        "name": "Waifu Diffusion 1.5 Beta3 (fp16)",
        "type": "checkpoints",
        "base": "SD2.1",
        "save_path": "default",
        "description": "Waifu Diffusion 1.5 Beta3",
        "reference": "https://huggingface.co/waifu-diffusion/wd-1-5-beta3",
        "filename": "wd-illusion-fp16.safetensors",
        "url": "https://huggingface.co/waifu-diffusion/wd-1-5-beta3/resolve/main/wd-illusion-fp16.safetensors"
      },
      {
        "name": "illuminatiDiffusionV1_v11 unCLIP model",
        "type": "unclip",
        "base": "SD2.1",
        "save_path": "default",
        "description": "Mix model (SD2.1 unCLIP + illuminatiDiffusionV1_v11)",
        "reference": "https://huggingface.co/comfyanonymous/illuminatiDiffusionV1_v11_unCLIP",
        "filename": "illuminatiDiffusionV1_v11-unclip-h-fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/illuminatiDiffusionV1_v11_unCLIP/resolve/main/illuminatiDiffusionV1_v11-unclip-h-fp16.safetensors"
      },
      {
        "name": "Waifu Diffusion 1.5 unCLIP model",
        "type": "unclip",
        "base": "SD2.1",
        "save_path": "default",
        "description": "Mix model (SD2.1 unCLIP + Waifu Diffusion 1.5)",
        "reference": "https://huggingface.co/comfyanonymous/wd-1.5-beta2_unCLIP",
        "filename": "wd-1-5-beta2-aesthetic-unclip-h-fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/wd-1.5-beta2_unCLIP/resolve/main/wd-1-5-beta2-aesthetic-unclip-h-fp16.safetensors"
      },
      {
        "name": "sdxl_vae.safetensors",
        "type": "VAE",
        "base": "SDXL VAE",
        "save_path": "default",
        "description": "SDXL-VAE",
        "reference": "https://huggingface.co/stabilityai/sdxl-vae",
        "filename": "sdxl_vae.safetensors",
        "url": "https://huggingface.co/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors"
      },
      {
        "name": "vae-ft-mse-840000-ema-pruned",
        "type": "VAE",
        "base": "SD1.5 VAE",
        "save_path": "default",
        "description": "vae-ft-mse-840000-ema-pruned",
        "reference": "https://huggingface.co/stabilityai/sd-vae-ft-mse-original",
        "filename": "vae-ft-mse-840000-ema-pruned.safetensors",
        "url": "https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors"
      },
      {
        "name": "orangemix.vae",
        "type": "VAE",
        "base": "SD1.5 VAE",
        "save_path": "default",
        "description": "orangemix vae model",
        "reference": "https://huggingface.co/WarriorMama777/OrangeMixs",
        "filename": "orangemix.vae.pt",
        "url": "https://huggingface.co/WarriorMama777/OrangeMixs/resolve/main/VAEs/orangemix.vae.pt"
      },
      {
        "name": "kl-f8-anime2",
        "type": "VAE",
        "base": "SD2.1 VAE",
        "save_path": "default",
        "description": "kl-f8-anime2 vae model",
        "reference": "https://huggingface.co/hakurei/waifu-diffusion-v1-4",
        "filename": "kl-f8-anime2.ckpt",
        "url": "https://huggingface.co/hakurei/waifu-diffusion-v1-4/resolve/main/vae/kl-f8-anime2.ckpt"
      },
      
      {
        "name": "LCM LoRA SD1.5",
        "type": "lora",
        "base": "SD1.5",
        "save_path": "loras/lcm/SD1.5",
        "description": "Latent Consistency LoRA for SD1.5",
        "reference": "https://huggingface.co/latent-consistency/lcm-lora-sdv1-5",
        "filename": "pytorch_lora_weights.safetensors",
        "url": "https://huggingface.co/latent-consistency/lcm-lora-sdv1-5/resolve/main/pytorch_lora_weights.safetensors"
      },
      {
        "name": "LCM LoRA SSD-1B",
        "type": "lora",
        "base": "SSD-1B",
        "save_path": "loras/lcm/SSD-1B",
        "description": "Latent Consistency LoRA for SSD-1B",
        "reference": "https://huggingface.co/latent-consistency/lcm-lora-ssd-1b",
        "filename": "pytorch_lora_weights.safetensors",
        "url": "https://huggingface.co/latent-consistency/lcm-lora-ssd-1b/resolve/main/pytorch_lora_weights.safetensors"
      },
      {
        "name": "LCM LoRA SDXL",
        "type": "lora",
        "base": "SSD-1B",
        "save_path": "loras/lcm/SDXL",
        "description": "Latent Consistency LoRA for SDXL",
        "reference": "https://huggingface.co/latent-consistency/lcm-lora-sdxl",
        "filename": "pytorch_lora_weights.safetensors",
        "url": "https://huggingface.co/latent-consistency/lcm-lora-sdxl/resolve/main/pytorch_lora_weights.safetensors"
      },
  
      {
        "name": "Theovercomer8's Contrast Fix (SD2.1)",
        "type": "lora",
        "base": "SD2.1",
        "save_path": "default",
        "description": "LORA: Theovercomer8's Contrast Fix (SD2.1)",
        "reference": "https://civitai.com/models/8765/theovercomer8s-contrast-fix-sd15sd21-768",
        "filename": "theovercomer8sContrastFix_sd21768.safetensors",
        "url": "https://civitai.com/api/download/models/10350"
      },
      {
        "name": "Theovercomer8's Contrast Fix (SD1.5)",
        "type": "lora",
        "base": "SD1.5",
        "save_path": "default",
        "description": "LORA: Theovercomer8's Contrast Fix (SD1.5)",
        "reference": "https://civitai.com/models/8765/theovercomer8s-contrast-fix-sd15sd21-768",
        "filename": "theovercomer8sContrastFix_sd15.safetensors",
        "url": "https://civitai.com/api/download/models/10638"
      },
      {
        "name": "T2I-Adapter (depth)",
        "type": "T2I-Adapter",
        "base": "SD1.5",
        "save_path": "default",
        "description": "ControlNet T2I-Adapter for depth",
        "reference": "https://huggingface.co/TencentARC/T2I-Adapter",
        "filename": "t2iadapter_depth_sd14v1.pth",
        "url": "https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_depth_sd14v1.pth"
      },
      {
        "name": "T2I-Adapter (seg)",
        "type": "T2I-Adapter",
        "base": "SD1.5",
        "save_path": "default",
        "description": "ControlNet T2I-Adapter for seg",
        "reference": "https://huggingface.co/TencentARC/T2I-Adapter",
        "filename": "t2iadapter_seg_sd14v1.pth",
        "url": "https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_seg_sd14v1.pth"
      },
      {
        "name": "T2I-Adapter (sketch)",
        "type": "T2I-Adapter",
        "base": "SD1.5",
        "save_path": "default",
        "description": "ControlNet T2I-Adapter for sketch",
        "reference": "https://huggingface.co/TencentARC/T2I-Adapter",
        "filename": "t2iadapter_sketch_sd14v1.pth",
        "url": "https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_sketch_sd14v1.pth"
      },
      {
        "name": "T2I-Adapter (keypose)",
        "type": "T2I-Adapter",
        "base": "SD1.5",
        "save_path": "default",
        "description": "ControlNet T2I-Adapter for keypose",
        "reference": "https://huggingface.co/TencentARC/T2I-Adapter",
        "filename": "t2iadapter_keypose_sd14v1.pth",
        "url": "https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_keypose_sd14v1.pth"
      },
      {
        "name": "T2I-Adapter (openpose)",
        "type": "T2I-Adapter",
        "base": "SD1.5",
        "save_path": "default",
        "description": "ControlNet T2I-Adapter for openpose",
        "reference": "https://huggingface.co/TencentARC/T2I-Adapter",
        "filename": "t2iadapter_openpose_sd14v1.pth",
        "url": "https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_openpose_sd14v1.pth"
      },
      {
        "name": "T2I-Adapter (color)",
        "type": "T2I-Adapter",
        "base": "SD1.5",
        "save_path": "default",
        "description": "ControlNet T2I-Adapter for color",
        "reference": "https://huggingface.co/TencentARC/T2I-Adapter",
        "filename": "t2iadapter_color_sd14v1.pth",
        "url": "https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_color_sd14v1.pth"
      },
      {
        "name": "T2I-Adapter (canny)",
        "type": "T2I-Adapter",
        "base": "SD1.5",
        "save_path": "default",
        "description": "ControlNet T2I-Adapter for canny",
        "reference": "https://huggingface.co/TencentARC/T2I-Adapter",
        "filename": "t2iadapter_canny_sd14v1.pth",
        "url": "https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_canny_sd14v1.pth"
      },
      {
        "name": "T2I-Style model",
        "type": "T2I-Style",
        "base": "SD1.5",
        "save_path": "default",
        "description": "ControlNet T2I-Adapter style model. Need to download CLIPVision model.",
        "reference": "https://huggingface.co/TencentARC/T2I-Adapter",
        "filename": "t2iadapter_style_sd14v1.pth",
        "url": "https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_style_sd14v1.pth"
      },
      {
        "name": "CiaraRowles/TemporalNet2",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "TemporalNet was a ControlNet model designed to enhance the temporal consistency of generated outputs",
        "reference": "https://huggingface.co/CiaraRowles/TemporalNet2",
        "filename": "temporalnetversion2.ckpt",
        "url": "https://huggingface.co/CiaraRowles/TemporalNet2/resolve/main/temporalnetversion2.ckpt"
      },
      {
        "name": "CiaraRowles/TemporalNet1XL (1.0)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "controlnet/TemporalNet1XL",
        "description": "This is TemporalNet1XL, it is a re-train of the controlnet TemporalNet1 with Stable Diffusion XL.",
        "reference": "https://huggingface.co/CiaraRowles/controlnet-temporalnet-sdxl-1.0",
        "filename": "diffusion_pytorch_model.safetensors",
        "url": "https://huggingface.co/CiaraRowles/controlnet-temporalnet-sdxl-1.0/resolve/main/diffusion_pytorch_model.safetensors"
      },
  
      {
        "name": "CLIPVision model (stabilityai/clip_vision_g)",
        "type": "clip_vision",
        "base": "SDXL",
        "save_path": "clip_vision/SDXL",
        "description": "[3.69GB] clip_g vision model",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "clip_vision_g.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/revision/clip_vision_g.safetensors"
      },
  
      {
        "name": "CLIPVision model (openai/clip-vit-large)",
        "type": "clip_vision",
        "base": "SD1.5",
        "save_path": "clip_vision/SD1.5",
        "description": "[1.7GB] CLIPVision model (needed for styles model)",
        "reference": "https://huggingface.co/openai/clip-vit-large-patch14",
        "filename": "pytorch_model.bin",
        "url": "https://huggingface.co/openai/clip-vit-large-patch14/resolve/main/pytorch_model.bin"
      },
      {
        "name": "CLIPVision model (IP-Adapter)",
        "type": "clip_vision",
        "base": "SD1.5",
        "save_path": "clip_vision/SD1.5",
        "description": "[2.5GB] CLIPVision model (needed for IP-Adapter)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "pytorch_model.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/models/image_encoder/pytorch_model.bin"
      },
      {
        "name": "CLIPVision model (IP-Adapter)",
        "type": "clip_vision",
        "base": "SDXL",
        "save_path": "clip_vision/SDXL",
        "description": "[3.69GB] CLIPVision model (needed for IP-Adapter)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "pytorch_model.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/image_encoder/pytorch_model.bin"
      },
  
      {
        "name": "stabilityai/control-lora-canny-rank128.safetensors",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "Control-LoRA: canny rank128",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "control-lora-canny-rank128.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank128/control-lora-canny-rank128.safetensors"
      },
      {
        "name": "stabilityai/control-lora-depth-rank128.safetensors",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "Control-LoRA: depth rank128",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "control-lora-depth-rank128.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank128/control-lora-depth-rank128.safetensors"
      },
      {
        "name": "stabilityai/control-lora-recolor-rank128.safetensors",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "Control-LoRA: recolor rank128",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "control-lora-recolor-rank128.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank128/control-lora-recolor-rank128.safetensors"
      },
      {
        "name": "stabilityai/control-lora-sketch-rank128-metadata.safetensors",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "Control-LoRA: sketch rank128 metadata",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "control-lora-sketch-rank128-metadata.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank128/control-lora-sketch-rank128-metadata.safetensors"
      },
  
  
      {
        "name": "stabilityai/control-lora-canny-rank256.safetensors",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "Control-LoRA: canny rank256",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "control-lora-canny-rank256.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-canny-rank256.safetensors"
      },
      {
        "name": "stabilityai/control-lora-depth-rank256.safetensors",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "Control-LoRA: depth rank256",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "control-lora-depth-rank256.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-depth-rank256.safetensors"
      },
      {
        "name": "stabilityai/control-lora-recolor-rank256.safetensors",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "Control-LoRA: recolor rank256",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "control-lora-recolor-rank256.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-recolor-rank256.safetensors"
      },
      {
        "name": "stabilityai/control-lora-sketch-rank256.safetensors",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "Control-LoRA: sketch rank256",
        "reference": "https://huggingface.co/stabilityai/control-lora",
        "filename": "control-lora-sketch-rank256.safetensors",
        "url": "https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-sketch-rank256.safetensors"
      },
  
      {
        "name": "kohya-ss/ControlNet-LLLite: SDXL Canny Anime",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "custom_nodes/ControlNet-LLLite-ComfyUI/models",
        "description": "[46.2MB] An extremely compactly designed controlnet model (a.k.a. ControlNet-LLLite). Note: The model structure is highly experimental and may be subject to change in the future.",
        "reference": "https://huggingface.co/kohya-ss/controlnet-lllite",
        "filename": "controllllite_v01032064e_sdxl_canny_anime.safetensors",
        "url": "https://huggingface.co/kohya-ss/controlnet-lllite/resolve/main/controllllite_v01032064e_sdxl_canny_anime.safetensors"
      },
  
      {
        "name": "SDXL-controlnet: OpenPose (v2)",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "ControlNet openpose model for SDXL",
        "reference": "https://huggingface.co/thibaud/controlnet-openpose-sdxl-1.0",
        "filename": "OpenPoseXL2.safetensors",
        "url": "https://huggingface.co/thibaud/controlnet-openpose-sdxl-1.0/resolve/main/OpenPoseXL2.safetensors"
      },
      {
        "name": "controlnet-SargeZT/controlnet-sd-xl-1.0-softedge-dexined",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "ControlNet softedge model for SDXL",
        "reference": "https://huggingface.co/SargeZT/controlnet-sd-xl-1.0-softedge-dexined",
        "filename": "controlnet-sd-xl-1.0-softedge-dexined.safetensors",
        "url": "https://huggingface.co/SargeZT/controlnet-sd-xl-1.0-softedge-dexined/resolve/main/controlnet-sd-xl-1.0-softedge-dexined.safetensors"
      },
      {
        "name": "controlnet-SargeZT/controlnet-sd-xl-1.0-depth-16bit-zoe",
        "type": "controlnet",
        "base": "SDXL",
        "save_path": "default",
        "description": "ControlNet depth-zoe model for SDXL",
        "reference": "https://huggingface.co/SargeZT/controlnet-sd-xl-1.0-depth-16bit-zoe",
        "filename": "depth-zoe-xl-v1.0-controlnet.safetensors",
        "url": "https://huggingface.co/SargeZT/controlnet-sd-xl-1.0-depth-16bit-zoe/resolve/main/depth-zoe-xl-v1.0-controlnet.safetensors"
      },
  
      {
        "name": "ControlNet-v1-1 (ip2p; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (ip2p)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11e_sd15_ip2p_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11e_sd15_ip2p_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (shuffle; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (shuffle)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11e_sd15_shuffle_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11e_sd15_shuffle_fp16.safetensors"
      },    
      {
        "name": "ControlNet-v1-1 (canny; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (canny)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_canny_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_canny_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (depth; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (depth)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11f1p_sd15_depth_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11f1p_sd15_depth_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (inpaint; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (inpaint)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_inpaint_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_inpaint_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (lineart; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (lineart)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_lineart_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_lineart_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (mlsd; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (mlsd)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_mlsd_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_mlsd_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (normalbae; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (normalbae)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_normalbae_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_normalbae_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (openpose; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (openpose)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_openpose_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_openpose_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (scribble; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (scribble)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_scribble_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_scribble_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (seg; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (seg)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_seg_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_seg_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (softedge; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (softedge)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15_softedge_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_softedge_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (anime; fp16)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (anime)",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11p_sd15s2_lineart_anime_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15s2_lineart_anime_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (tile; fp16; v11u)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (tile) / v11u",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11u_sd15_tile_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11u_sd15_tile_fp16.safetensors"
      },
      {
        "name": "ControlNet-v1-1 (tile; fp16; v11f1e)",
        "type": "controlnet",
        "base": "SD1.5",
        "save_path": "default",
        "description": "Safetensors/FP16 versions of the new ControlNet-v1-1 checkpoints (tile) / v11f1e<BR>You need to this model for <B>Tiled Resample</B>",
        "reference": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors",
        "filename": "control_v11f1e_sd15_tile_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11f1e_sd15_tile_fp16.safetensors"
      },
      {
        "name": "GLIGEN textbox (fp16; pruned)",
        "type": "gligen",
        "base": "SD1.5",
        "save_path": "default",
        "description": "GLIGEN textbox model",
        "reference": "https://huggingface.co/comfyanonymous/GLIGEN_pruned_safetensors",
        "filename": "gligen_sd14_textbox_pruned_fp16.safetensors",
        "url": "https://huggingface.co/comfyanonymous/GLIGEN_pruned_safetensors/resolve/main/gligen_sd14_textbox_pruned_fp16.safetensors"
      },
      {
        "name": "ViT-H SAM model",
        "type": "sam",
        "base": "SAM",
        "save_path": "sams",
        "description": "Segmenty Anything SAM model (ViT-H)",
        "reference": "https://github.com/facebookresearch/segment-anything#model-checkpoints",
        "filename": "sam_vit_h_4b8939.pth",
        "url": "https://dl.fbaipublicfiles.com/segment_anything/sam_vit_h_4b8939.pth"
      },
      {
        "name": "ViT-L SAM model",
        "type": "sam",
        "base": "SAM",
        "save_path": "sams",
        "description": "Segmenty Anything SAM model (ViT-L)",
        "reference": "https://github.com/facebookresearch/segment-anything#model-checkpoints",
        "filename": "sam_vit_l_0b3195.pth",
        "url": "https://dl.fbaipublicfiles.com/segment_anything/sam_vit_l_0b3195.pth"
      },
      {
        "name": "ViT-B SAM model",
        "type": "sam",
        "base": "SAM",
        "save_path": "sams",
        "description": "Segmenty Anything SAM model (ViT-B)",
        "reference": "https://github.com/facebookresearch/segment-anything#model-checkpoints",
        "filename": "sam_vit_b_01ec64.pth",
        "url": "https://dl.fbaipublicfiles.com/segment_anything/sam_vit_b_01ec64.pth"
      },
      {
        "name": "seecoder v1.0",
        "type": "seecoder",
        "base": "SEECODER",
        "save_path": "seecoders",
        "description": "SeeCoder model",
        "reference": "https://huggingface.co/shi-labs/prompt-free-diffusion/tree/main/pretrained/pfd/seecoder",
        "filename": "seecoder-v1-0.safetensors",
        "url": "https://huggingface.co/shi-labs/prompt-free-diffusion/resolve/main/pretrained/pfd/seecoder/seecoder-v1-0.safetensors"
      },
      {
        "name": "seecoder pa v1.0",
        "type": "seecoder",
        "base": "SEECODER",
        "save_path": "seecoders",
        "description": "SeeCoder model",
        "reference": "https://huggingface.co/shi-labs/prompt-free-diffusion/tree/main/pretrained/pfd/seecoder",
        "filename": "seecoder-pa-v1-0.safetensors",
        "url": "https://huggingface.co/shi-labs/prompt-free-diffusion/resolve/main/pretrained/pfd/seecoder/seecoder-pa-v1-0.safetensors"
      },
      {
        "name": "seecoder anime v1.0",
        "type": "seecoder",
        "base": "SEECODER",
        "save_path": "seecoders",
        "description": "SeeCoder model",
        "reference": "https://huggingface.co/shi-labs/prompt-free-diffusion/tree/main/pretrained/pfd/seecoder",
        "filename": "seecoder-anime-v1-0.safetensors",
        "url": "https://huggingface.co/shi-labs/prompt-free-diffusion/resolve/main/pretrained/pfd/seecoder/seecoder-anime-v1-0.safetensors"
      },
      {
        "name": "face_yolov8m (bbox)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/bbox",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "face_yolov8m.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/face_yolov8m.pt"
      },
      {
        "name": "face_yolov8n (bbox)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/bbox",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "face_yolov8n.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/face_yolov8n.pt"
      },
      {
        "name": "face_yolov8n_v2 (bbox)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/bbox",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "face_yolov8n_v2.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/face_yolov8n_v2.pt"
      },
      {
        "name": "face_yolov8s (bbox)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/bbox",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "face_yolov8s.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/face_yolov8s.pt"
      },
      {
        "name": "hand_yolov8n (bbox)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/bbox",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "hand_yolov8n.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/hand_yolov8n.pt"
      },
      {
        "name": "hand_yolov8s (bbox)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/bbox",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "hand_yolov8s.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/hand_yolov8s.pt"
      },
      {
        "name": "person_yolov8m (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "person_yolov8m-seg.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/person_yolov8m-seg.pt"
      },
      {
        "name": "person_yolov8n (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "person_yolov8n-seg.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/person_yolov8n-seg.pt"
      },
      {
        "name": "person_yolov8s (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "person_yolov8s-seg.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/person_yolov8s-seg.pt"
      },
      {
        "name": "deepfashion2_yolov8s (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://huggingface.co/Bingsu/adetailer/tree/main",
        "filename": "deepfashion2_yolov8s-seg.pt",
        "url": "https://huggingface.co/Bingsu/adetailer/resolve/main/deepfashion2_yolov8s-seg.pt"
      },
  
      {
        "name": "face_yolov8m-seg_60.pt (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://github.com/hben35096/assets/releases/tag/yolo8",
        "filename": "face_yolov8m-seg_60.pt",
        "url": "https://github.com/hben35096/assets/releases/download/yolo8/face_yolov8m-seg_60.pt"
      },
      {
        "name": "face_yolov8n-seg2_60.pt (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://github.com/hben35096/assets/releases/tag/yolo8",
        "filename": "face_yolov8n-seg2_60.pt",
        "url": "https://github.com/hben35096/assets/releases/download/yolo8/face_yolov8n-seg2_60.pt"
      },
      {
        "name": "hair_yolov8n-seg_60.pt (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://github.com/hben35096/assets/releases/tag/yolo8",
        "filename": "hair_yolov8n-seg_60.pt",
        "url": "https://github.com/hben35096/assets/releases/download/yolo8/hair_yolov8n-seg_60.pt"
      },
      {
        "name": "skin_yolov8m-seg_400.pt (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://github.com/hben35096/assets/releases/tag/yolo8",
        "filename": "skin_yolov8m-seg_400.pt",
        "url": "https://github.com/hben35096/assets/releases/download/yolo8/skin_yolov8m-seg_400.pt"
      },
      {
        "name": "skin_yolov8n-seg_400.pt (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://github.com/hben35096/assets/releases/tag/yolo8",
        "filename": "skin_yolov8n-seg_400.pt",
        "url": "https://github.com/hben35096/assets/releases/download/yolo8/skin_yolov8n-seg_400.pt"
      },
      {
        "name": "skin_yolov8n-seg_800.pt (segm)",
        "type": "Ultralytics",
        "base": "Ultralytics",
        "save_path": "ultralytics/segm",
        "description": "These are the available models in the UltralyticsDetectorProvider of Impact Pack.",
        "reference": "https://github.com/hben35096/assets/releases/tag/yolo8",
        "filename": "skin_yolov8n-seg_800.pt",
        "url": "https://github.com/hben35096/assets/releases/download/yolo8/skin_yolov8n-seg_800.pt"
      },
  
      {
        "name": "animatediff/mmd_sd_v14.ckpt (comfyui-animatediff)",
        "type": "animatediff",
        "base": "SD1.x",
        "save_path": "custom_nodes/comfyui-animatediff/models",
        "description": "Pressing 'install' directly downloads the model from the ArtVentureX/AnimateDiff extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "mm_sd_v14.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v14.ckpt"
      },
      {
        "name": "animatediff/mm_sd_v15.ckpt (comfyui-animatediff)",
        "type": "animatediff",
        "base": "SD1.x",
        "save_path": "custom_nodes/comfyui-animatediff/models",
        "description": "Pressing 'install' directly downloads the model from the ArtVentureX/AnimateDiff extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "mm_sd_v15.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15.ckpt"
      },
  
      {
        "name": "animatediff/mmd_sd_v14.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "animatediff",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/models",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "mm_sd_v14.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v14.ckpt"
      },
      {
        "name": "animatediff/mm_sd_v15.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "animatediff",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/models",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "mm_sd_v15.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15.ckpt"
      },
      {
        "name": "animatediff/mm_sd_v15_v2.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "animatediff",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/models",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "mm_sd_v15_v2.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15_v2.ckpt"
      },
      {
        "name": "animatediff/mm_sdxl_v10_beta.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "animatediff",
        "base": "SDXL",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/models",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "mm_sdxl_v10_beta.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/mm_sdxl_v10_beta.ckpt"
      },
      {
        "name": "AD_Stabilized_Motion/mm-Stabilized_high.pth (ComfyUI-AnimateDiff-Evolved)",
        "type": "animatediff",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/models",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/manshoety/AD_Stabilized_Motion",
        "filename": "mm-Stabilized_high.pth",
        "url": "https://huggingface.co/manshoety/AD_Stabilized_Motion/resolve/main/mm-Stabilized_high.pth"
      },
      {
        "name": "AD_Stabilized_Motion/mm-Stabilized_mid.pth (ComfyUI-AnimateDiff-Evolved)",
        "type": "animatediff",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/models",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/manshoety/AD_Stabilized_Motion",
        "filename": "mm-Stabilized_mid.pth",
        "url": "https://huggingface.co/manshoety/AD_Stabilized_Motion/resolve/main/mm-Stabilized_mid.pth"
      },
      {
        "name": "CiaraRowles/temporaldiff-v1-animatediff.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "animatediff",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/models",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/CiaraRowles/TemporalDiff",
        "filename": "temporaldiff-v1-animatediff.ckpt",
        "url": "https://huggingface.co/CiaraRowles/TemporalDiff/resolve/main/temporaldiff-v1-animatediff.ckpt"
      },
  
      {
        "name": "animatediff/v2_lora_PanLeft.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "motion lora",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/motion_lora",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "v2_lora_PanLeft.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/v2_lora_PanLeft.ckpt"
      },
      {
        "name": "animatediff/v2_lora_PanRight.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "motion lora",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/motion_lora",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "v2_lora_PanRight.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/v2_lora_PanRight.ckpt"
      },
      {
        "name": "animatediff/v2_lora_RollingAnticlockwise.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "motion lora",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/motion_lora",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "v2_lora_RollingAnticlockwise.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/v2_lora_RollingAnticlockwise.ckpt"
      },
      {
        "name": "animatediff/v2_lora_RollingClockwise.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "motion lora",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/motion_lora",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "v2_lora_RollingClockwise.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/v2_lora_RollingClockwise.ckpt"
      },
      {
        "name": "animatediff/v2_lora_TiltDown.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "motion lora",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/motion_lora",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "v2_lora_TiltDown.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/v2_lora_TiltDown.ckpt"
      },
      {
        "name": "animatediff/v2_lora_TiltUp.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "motion lora",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/motion_lora",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "v2_lora_TiltUp.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/v2_lora_TiltUp.ckpt"
      },
      {
        "name": "animatediff/v2_lora_ZoomIn.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "motion lora",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/motion_lora",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "v2_lora_ZoomIn.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/v2_lora_ZoomIn.ckpt"
      },
      {
        "name": "animatediff/v2_lora_ZoomOut.ckpt (ComfyUI-AnimateDiff-Evolved)",
        "type": "motion lora",
        "base": "SD1.x",
        "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/motion_lora",
        "description": "Pressing 'install' directly downloads the model from the Kosinkadink/ComfyUI-AnimateDiff-Evolved extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/guoyww/animatediff",
        "filename": "v2_lora_ZoomOut.ckpt",
        "url": "https://huggingface.co/guoyww/animatediff/resolve/main/v2_lora_ZoomOut.ckpt"
      },
  
      {
        "name": "ip-adapter_sdxl.bin<BR>(install to IPAdapter-ComfyUI)",
        "type": "IP-Adapter",
        "base": "SDXL",
        "save_path": "custom_nodes/IPAdapter-ComfyUI/models",
        "description": "Pressing 'install' directly downloads the model from the IPAdapter-ComfyUI/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "ip-adapter_sdxl.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter_sdxl.bin"
      },
      {
        "name": "ip-adapter_sd15.bin<BR>(install to IPAdapter-ComfyUI)",
        "type": "IP-Adapter",
        "base": "SD1.5",
        "save_path": "custom_nodes/IPAdapter-ComfyUI/models",
        "description": "Pressing 'install' directly downloads the model from the IPAdapter-ComfyUI/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "ip-adapter_sd15.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter_sd15.bin"
      },
      {
        "name": "wd15_ip_adapter_plus.bin<BR>(install to IPAdapter-ComfyUI)",
        "type": "IP-Adapter",
        "base": "SDXL",
        "save_path": "custom_nodes/IPAdapter-ComfyUI/models",
        "description": "Pressing 'install' directly downloads the model from the IPAdapter-ComfyUI/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "wd15_ip_adapter_plus.bin",
        "url": "https://huggingface.co/furusu/IP-Adapter/resolve/main/wd15_ip_adapter_plus.bin"
      },
      {
        "name": "ip-adapter-plus_sd15.bin<BR>(install to IPAdapter-ComfyUI)",
        "type": "IP-Adapter",
        "base": "SD1.5",
        "save_path": "custom_nodes/IPAdapter-ComfyUI/models",
        "description": "Pressing 'install' directly downloads the model from the IPAdapter-ComfyUI/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "ip-adapter-plus_sd15.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus_sd15.bin"
      },
      {
        "name": "ip-adapter-plus-face_sd15.bin<BR>(install to IPAdapter-ComfyUI)",
        "type": "IP-Adapter",
        "base": "SD1.5",
        "save_path": "custom_nodes/IPAdapter-ComfyUI/models",
        "description": "Pressing 'install' directly downloads the model from the IPAdapter-ComfyUI/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "ip-adapter-plus-face_sd15.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus-face_sd15.bin"
      },
  
      {
        "name": "ip-adapter-plus_sdxl_vit-h.bin<BR>(install to ComfyUI_IPAdapter_plus)",
        "type": "IP-Adapter",
        "base": "SDXL",
        "save_path": "custom_nodes/ComfyUI_IPAdapter_plus/models",
        "description": "Pressing 'install' directly downloads the model from the ComfyUI_IPAdapter_plus/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "ip-adapter-plus_sdxl_vit-h.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter-plus_sdxl_vit-h.bin"
      },
      {
        "name": "ip-adapter_sdxl_vit-h.bin<BR>(install to ComfyUI_IPAdapter_plus)",
        "type": "IP-Adapter",
        "base": "SDXL",
        "save_path": "custom_nodes/ComfyUI_IPAdapter_plus/models",
        "description": "Pressing 'install' directly downloads the model from the ComfyUI_IPAdapter_plus/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "ip-adapter_sdxl_vit-h.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter_sdxl_vit-h.bin"
      },
      {
        "name": "ip-adapter_sdxl.bin<BR>(install to ComfyUI_IPAdapter_plus)",
        "type": "IP-Adapter",
        "base": "SDXL",
        "save_path": "custom_nodes/ComfyUI_IPAdapter_plus/models",
        "description": "Pressing 'install' directly downloads the model from the ComfyUI_IPAdapter_plus/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "ip-adapter_sdxl.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter_sdxl.bin"
      },
      {
        "name": "ip-adapter_sd15.bin<BR>(install to ComfyUI_IPAdapter_plus)",
        "type": "IP-Adapter",
        "base": "SD1.5",
        "save_path": "custom_nodes/ComfyUI_IPAdapter_plus/models",
        "description": "Pressing 'install' directly downloads the model from the ComfyUI_IPAdapter_plus/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/h94/IP-Adapter",
        "filename": "ip-adapter_sd15.bin",
        "url": "https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter_sd15.bin"
      },
  
      {
        "name": "pfg-novel-n10.pt",
        "type": "PFG",
        "base": "SD1.5",
        "save_path": "custom_nodes/pfg-ComfyUI/models",
        "description": "Pressing 'install' directly downloads the model from the pfg-ComfyUI/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/furusu/PFG",
        "filename": "pfg-novel-n10.pt",
        "url": "https://huggingface.co/furusu/PFG/resolve/main/pfg-novel-n10.pt"
      },
      {
        "name": "pfg-wd14-n10.pt",
        "type": "PFG",
        "base": "SD1.5",
        "save_path": "custom_nodes/pfg-ComfyUI/models",
        "description": "Pressing 'install' directly downloads the model from the pfg-ComfyUI/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/furusu/PFG",
        "filename": "pfg-wd14-n10.pt",
        "url": "https://huggingface.co/furusu/PFG/resolve/main/pfg-wd14-n10.pt"
      },
      {
        "name": "pfg-wd15beta2-n10.pt",
        "type": "PFG",
        "base": "SD1.5",
        "save_path": "custom_nodes/pfg-ComfyUI/models",
        "description": "Pressing 'install' directly downloads the model from the pfg-ComfyUI/models extension node. (Note: Requires ComfyUI-Manager V0.24 or above)",
        "reference": "https://huggingface.co/furusu/PFG",
        "filename": "pfg-wd15beta2-n10.pt",
        "url": "https://huggingface.co/furusu/PFG/resolve/main/pfg-wd15beta2-n10.pt"
      },
      {
        "name": "GFPGANv1.4.pth",
        "type": "GFPGAN",
        "base": "GFPGAN",
        "save_path": "facerestore_models",
        "description": "Face Restoration Models. Download the model required for using the 'Facerestore CF (Code Former)' custom node.",
        "reference": "https://github.com/TencentARC/GFPGAN/releases",
        "filename": "GFPGANv1.4.pth",
        "url": "https://github.com/TencentARC/GFPGAN/releases/download/v1.3.4/GFPGANv1.4.pth"
      },
      {
        "name": "codeformer.pth",
        "type": "CodeFormer",
        "base": "CodeFormer",
        "save_path": "facerestore_models",
        "description": "Face Restoration Models. Download the model required for using the 'Facerestore CF (Code Former)' custom node.",
        "reference": "https://github.com/sczhou/CodeFormer/releases",
        "filename": "codeformer.pth",
        "url": "https://github.com/sczhou/CodeFormer/releases/download/v0.1.0/codeformer.pth"
      },
      {
        "name": "detection_Resnet50_Final.pth",
        "type": "facexlib",
        "base": "facexlib",
        "save_path": "facerestore_models",
        "description": "Face Detection Models. Download the model required for using the 'Facerestore CF (Code Former)' custom node.",
        "reference": "https://github.com/xinntao/facexlib",
        "filename": "detection_Resnet50_Final.pth",
        "url": "https://github.com/xinntao/facexlib/releases/download/v0.1.0/detection_Resnet50_Final.pth"
      },
      {
        "name": "detection_mobilenet0.25_Final.pth",
        "type": "facexlib",
        "base": "facexlib",
        "save_path": "facerestore_models",
        "description": "Face Detection Models. Download the model required for using the 'Facerestore CF (Code Former)' custom node.",
        "reference": "https://github.com/xinntao/facexlib",
        "filename": "detection_mobilenet0.25_Final.pth",
        "url": "https://github.com/xinntao/facexlib/releases/download/v0.1.0/detection_mobilenet0.25_Final.pth"
      },
      {
        "name": "yolov5l-face.pth",
        "type": "facexlib",
        "base": "facexlib",
        "save_path": "facedetection",
        "description": "Face Detection Models. Download the model required for using the 'Facerestore CF (Code Former)' custom node.",
        "reference": "https://github.com/xinntao/facexlib",
        "filename": "yolov5l-face.pth",
        "url": "https://github.com/sczhou/CodeFormer/releases/download/v0.1.0/yolov5l-face.pth"
      },
      {
        "name": "yolov5n-face.pth",
        "type": "facexlib",
        "base": "facexlib",
        "save_path": "facedetection",
        "description": "Face Detection Models. Download the model required for using the 'Facerestore CF (Code Former)' custom node.",
        "reference": "https://github.com/xinntao/facexlib",
        "filename": "yolov5n-face.pth",
        "url": "https://github.com/sczhou/CodeFormer/releases/download/v0.1.0/yolov5n-face.pth"
      }
    ]  
  }
  