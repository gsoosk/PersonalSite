import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import Telegram from '../svgIcons/telegram';
import Instagram from '../svgIcons/instagram';
import Mail from 'material-ui/svg-icons/communication/email'
import Call from 'material-ui/svg-icons/communication/call';
import GitHub from '../svgIcons/github';
import Twitter from '../svgIcons/twitter';
class fContactBar extends Component
{
    render()
    {
        return(
            <div>
                <IconButton href="http://instagram.com/farzadhabibii"
                    tooltip="Instagram"
                    tooltipPosition="top-center">
                    <Instagram/>
                </IconButton>
                <IconButton href="http://t.me/farzad_habibii"
                    tooltip="Telegram"
                    tooltipPosition="top-center">
                    <Telegram/>
                </IconButton>
                <IconButton href="mailto:farzadhabibii98@gmail.com"
                            tooltip="EMail"
                            tooltipPosition="top-center">
                    <Mail/>
                </IconButton>
                <IconButton href="tel:+989375143622"
                            tooltip="Call"
                            tooltipPosition="top-center">
                    <Call/>
                </IconButton>
                <IconButton href="http://github.com/gsoosk"
                            tooltip="GitHub profile"
                            tooltipPosition="top-center">
                    <GitHub/>
                </IconButton>
                <IconButton href="http://twitter.com/farzadhabibii"
                            tooltip="twitter"
                            tooltipPosition="top-center">
                    <Twitter/>
                </IconButton>

            </div>
        );

    }
}

export default fContactBar ;