# Printwatch A1 Card

**Fork of [PrintWatch Card](https://github.com/drkpxl/printwatch-card)** - Modified specifically for A1 series 3D printers.

A feature-rich Home Assistant card for monitoring and controlling your A1 series 3D printer. Get real-time updates on print progress, temperatures, material status, and more with a sleek, user-friendly interface.

## About This Fork

This is a fork of the original PrintWatch Card by [drkpxl](https://github.com/drkpxl), specifically adapted for A1 series 3D printers. Key changes include:

- Updated sensor naming conventions for A1 printers
- Optimized material slot handling
- Enhanced time formatting for decimal hour inputs
- A1-specific configuration examples

**Original Project**: [PrintWatch Card by drkpxl](https://github.com/drkpxl/printwatch-card)

### Light Mode

![PrintWatch Card Screenshot](assets/light-mode-min.png)

### Dark Mode

![PrintWatch Dark Mode](assets/dark-mode-min.png)

### German Example

![PrintWatch Nord](assets/german.png)

## Features

- 🎥 Live camera feed with configurable refresh rate
- 📊 Print progress tracking with layer count and estimated completion time
- 🎨 AMS/Material status visualization including current filament
- 💡 Quick controls for chamber light and auxiliary fan
- ⏯️ Print control buttons (pause/resume/stop) with [confirmation dialogs](assets/pause.png)
- 🎛️ Speed profile monitoring and control
- ⚡ Local API (LAN Mode)
- 🌑 Native Theme support
- 🌡️ Real-time temperature monitoring and control for bed and nozzle
- 📷 G-Code preview image (requires HA Bambu Lab plugin update)
- 🏷️ Display print weight and length details
  -🌍 Localization support (initial translations in German, more contributions welcome!)
  pa

## Prerequisites

- Home Assistant
- A1 Printer integration configured in Home Assistant using [ha-bambulab](<(https://github.com/greghesp/ha-bambulab)>) plugin
- Required entities set up (see Configuration section)
- Image sensor toggle turned on

![Image Screenshot](assets/image-toggle.png)

## Installation

### HACS Custom Repository (Recommended)

1. **Open HACS in Home Assistant**

   - Navigate to HACS in your Home Assistant sidebar

2. **Add Custom Repository**

   - Click the **three-dot menu (⋮)** in the top-right corner of HACS
   - Select **"Custom repositories"**
   - In the **"Repository"** field, paste: `https://github.com/HampusAndersson01/printwatch-card-A1`
   - In the **"Category"** dropdown, select **"Dashboard"**
   - Click **"Add"**

3. **Install the Card**

   - Go to the **"Frontend"** section in HACS
   - Search for **"Printwatch A1 Card"**
   - Click on it and select **"Download"**
   - Restart Home Assistant when prompted

4. **Clear Browser Cache**
   - Clear your browser cache to ensure the new card loads properly
   - On most browsers: Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac)

### Alternative: Manual Installation

If you prefer not to use HACS:

1. Download the `dist/printwatch-card.js` file from this repository
2. Copy it to your `config/www/` directory in Home Assistant
3. Add the resource in your Home Assistant configuration:
   ```yaml
   lovelace:
     resources:
       - url: /local/printwatch-card.js
         type: module
   ```
4. Restart Home Assistant

## Configuration

Add the card to your dashboard with this basic configuration:

## Configuration

Add the card to your dashboard with this basic configuration:

```yaml
type: custom:printwatch-a1-card
printer_name: A1
camera_refresh_rate: 1000 # Refresh rate in milliseconds (1 second)
print_status_entity: sensor.a1_print_status
current_stage_entity: sensor.a1_current_stage
task_name_entity: sensor.a1_task_name
progress_entity: sensor.a1_print_progress
current_layer_entity: sensor.a1_current_layer
total_layers_entity: sensor.a1_total_layer_count
remaining_time_entity: sensor.a1_remaining_time
bed_temp_entity: sensor.a1_bed_temperature
nozzle_temp_entity: sensor.a1_nozzle_temperature
bed_target_temp_entity: number.a1_bed_target_temperature
nozzle_target_temp_entity: number.a1_nozzle_target_temperature
speed_profile_entity: select.a1_printing_speed
ams_slot1_entity: sensor.a1_ams_tray_1
ams_slot2_entity: sensor.a1_ams_tray_2
ams_slot3_entity: sensor.a1_ams_tray_3
ams_slot4_entity: sensor.a1_ams_tray_4
ams_slot5_entity: sensor.a1_ams_tray_5
---
camera_entity: image.a1_camera
cover_image_entity: image.a1_cover_image
pause_button_entity: button.a1_pause_printing
resume_button_entity: button.a1_resume_printing
stop_button_entity: button.a1_stop_printing
chamber_light_entity: light.a1_chamber_light
aux_fan_entity: fan.a1_aux_fan
print_weight_entity: sensor.a1_print_weight
print_length_entity: sensor.a1_print_length
```

## Troubleshooting

### Common Issues

1. **Card not appearing**

   - Check that all required entities exist and are correctly named
   - Verify resources are properly loaded in HA

2. **Camera feed not updating**
   - Ensure camera entity is properly configured
   - Check that image updates are enabled in HA
   - You must toggle on "use image sensor camera" in the ha-bambulab plugin

![Image Screenshot](assets/image-toggle.png)

3. **Controls not working**

   - Verify that your user has proper permissions for the entities
   - Check that button entities are available and not in an error state

4. **G-Code preview not appearing**
   - Ensure you have the latest version of the HA Bambu Lab plugin
   - Enable G-Code preview in the plugin settings
5. **Localization issues**
   - Some translations are AI-generated; if you notice errors, consider submitting improvements!

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Support

If you're having issues, please:

1. Check the Troubleshooting section above
2. Search existing [GitHub issues](https://github.com/HampusAndersson01/printwatch-card-A1/issues)
3. Create a new issue if your problem isn't already reported
4. For issues related to the original PrintWatch Card, check the [upstream repository](https://github.com/drkpxl/printwatch-card)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Original Author**: [drkpxl](https://github.com/drkpxl) for creating the [original PrintWatch Card](https://github.com/drkpxl/printwatch-card)
- [Greg Hesp](https://github.com/greghesp/ha-bambulab) maker of [ha-bambulab](<(https://github.com/greghesp/ha-bambulab)>) without this plugin wouldn't work
- Thanks to all A1 and P1S users who provided feedback and testing
- Inspired by the great Home Assistant community

---

If you find this useful I am addicted to good coffee.

<a href="https://www.buymeacoffee.com/drkpxl" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 160px !important;" ></a>
