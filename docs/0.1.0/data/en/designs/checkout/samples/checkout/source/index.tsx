import { Styles, Module, RadioGroup, Panel, observable, VStack, HStack, Icon, Popover, Label } from "@ijstech/components";
import { customRadioStyles, customListItemStyled } from "./index.css";
import { PaymentModel, IPaymentOption } from "./model";
import Information from "./info";
const Theme = Styles.Theme.ThemeVars;

export default class Payment extends Module {
    private model: PaymentModel;
    @observable('selectedPayment')
    private selectedPayment: IPaymentOption = {
        id: '',
        img: '',
        name: ''
    };

    private pnlPaymentSelect: Panel;
    private pnlWeb3: VStack;
    private pnlCreditCard: VStack;
    private pnlWeb3Name: Panel;
    private radioMapper: Record<string, HStack> = {};
    private infoElm: Information;
    private policyPopover: Popover;
    private policyIcon: Icon;
    private pnlPolicy: VStack;
    private infoPopover: Popover;
    private infoIcon: Icon;
    private pnlRoomStar: Panel;
    private lblHotelState: Label;
    private lblHotelReviewers: Label;
    private lblHotelAddress: Label;
    private lblHotelName: Label;
    private lblHotelPoint: Label;

    get room() {
        return this.model.room;
    }

    private onPaymentMethodChanged(target: RadioGroup) {
        const oldPayment = this.selectedPayment.id && this.radioMapper[this.selectedPayment.id];
        if (oldPayment) {
            oldPayment.border = { "radius": "3px", "width": "1px", "style": "solid", "color": "var(--divider)" };
            const checkIcon = oldPayment.children?.[0] as Icon;
            if (checkIcon) checkIcon.visible = false;
        }
        const value = target.selectedValue;
        const payment = this.model.getPayment(value);
        if (payment) this.selectedPayment = payment;
        this.renderPaymentInfo();
    }

    private renderPaymentInfo() {
        this.pnlWeb3Name.visible = this.pnlWeb3.visible = this.selectedPayment?.id === '5';
        this.pnlCreditCard.visible = this.selectedPayment?.id === '1';
        const currentPayment = this.selectedPayment.id && this.radioMapper[this.selectedPayment.id];
        if (currentPayment) {
            currentPayment.border = { "radius": "3px", "width": "1px", "style": "solid", "color": "var(--colors-primary-main)" };
            const checkIcon = currentPayment.children?.[0] as Icon;
            if (checkIcon) checkIcon.visible = true;
        }
    }

    private renderPaymentMethods() {
        this.pnlPaymentSelect.clearInnerHTML();
        this.pnlPaymentSelect.appendChild(
            <i-radio-group
                id='payGroup'
                width='100%'
                layout='horizontal'
                class={customRadioStyles}
                onChanged={this.onPaymentMethodChanged}
            >
                {
                    this.model.payments.map((item, index) => {
                        const hstack = <i-hstack
                            verticalAlignment='center'
                            padding={{ "left": "20px", "right": "20px" }}
                            boxShadow='0 2px 7px rgba(0,0,0,.1)'
                            gap={6}
                            minHeight={55}
                            position="relative"
                            border={{ "radius": "3px", "width": "1px", "style": "solid", "color": "var(--divider)" }}
                        >
                            <i-icon
                                name="check-circle"
                                fill={Theme.colors.primary.main}
                                top={-10}
                                right={-10}
                                width={20} height={20}
                                zIndex={10}
                                visible={false}
                            ></i-icon>
                            <i-image
                                url={item.img}
                                width={25}
                                stack={{ "shrink": "0" }}
                            >
                            </i-image>
                            <i-label
                                caption={item.name}
                                font={{ "color": "var(--text-secondary)" }}
                            >
                            </i-label>
                        </i-hstack>
                        this.radioMapper[item.id] = hstack;
                        return <i-radio value={item.id}>{hstack}</i-radio>
                    })
                }
            </i-radio-group>
        )
    }

    private handleViewInfo() {
        if (!this.infoElm) {
            this.infoElm = new Information(undefined, {
                data: this.model.information,
                onClose: () => this.infoElm.closeModal()
            });
        } else {
            this.infoElm.data = this.model.information;
        }
        this.infoElm.openModal({
            width: '616px',
            maxWidth: '100%',
            showBackdrop: true,
            border: { radius: 8 },
            popupPlacement: 'center',
            closeIcon: null,
            padding: { left: 0, bottom: 0, right: 0, top: 0 }
        })
    }

    private renderRoom() {
        this.pnlRoomStar.clearInnerHTML();
        if (this.room.hotel?.stars) {
            for (let i = 0; i < this.room.hotel.stars; i++) {
                this.pnlRoomStar.appendChild(
                    <i-icon
                        name='star'
                        width='12px'
                        height='12px'
                        fill='var(--colors-warning-main)'
                    >
                    </i-icon>
                );
            }
        }
        this.lblHotelReviewers.caption = `${this.room?.hotel?.reviewers || 0} reviews`;
        this.lblHotelState.caption = this.model.getHotelStatus();
        this.lblHotelName.caption = this.room?.hotel?.name || '';
        this.lblHotelAddress.caption = this.room?.hotel?.address || '';
        this.lblHotelPoint.caption = this.room?.hotel?.point || 0;
    }

    init() {
        super.init();
        this.onPaymentMethodChanged = this.onPaymentMethodChanged.bind(this);
        this.model = new PaymentModel(this);
        this.model.updateTheme();
        this.renderPaymentMethods();
        this.pnlPolicy.classList.add(customListItemStyled);
        this.policyPopover.linkTo = this.policyIcon;
        this.infoPopover.linkTo = this.infoIcon;
        this.model.fetchRoom();
        this.model.fetchBooking();
        this.renderRoom();
    }

    render(){
        return <i-panel
            width='100%'
            background={{"color":"var(--background-default)"}}
>
            <i-stack
                width='100%'
                gap={30}
                mediaQueries={[{"maxWidth":"767px","properties":{"direction":"vertical"}}]}
            >
                <i-vstack
                    gap='15px'
                    stack={{ "grow": "1" }}
                    overflow="hidden"
                >
                    <i-hstack
                        verticalAlignment='center'
                        gap='4px'
                        padding={{"left":15,"right":15}}
                        height='46px'
                        border={{"width":"1px","style":"solid","color":"var(--colors-primary-main)","radius":"3px"}}
                        background={{"color":"var(--colors-primary-light)"}}
                    >
                        <i-image
                            url='https://static.travala.com/resources/images-pc/icon/shield-blue.svg'
                            width={18}
                        >
                        </i-image>
                        <i-label
                            caption='Secure checkout '
                            font={{"color":"var(--colors-primary-main)","weight":600,"size":"15px"}}
                            display='inline'
                        >
                        </i-label>
                        <i-label
                            caption='- it takes only a few minutes!'
                            display='inline'
                        >
                        </i-label>
                    </i-hstack>
                    <i-vstack
                        border={{"radius":"4px"}}
                        background={{"color":"var(--background-main)"}}
                        width='100%'
                        gap={30}
                    >
                        <i-vstack
                            width='100%'
                            padding={{"top":"14px","left":"25px","right":"25px"}}
                            gap={30}
                        >
                            <i-hstack
                                verticalAlignment='center'
                                horizontalAlignment='space-between'
                                border={{"bottom":{"color":"var(--divider)","width":"1px","style":"solid"}}}
                                padding={{"bottom":8}}
                            >
                                <i-label
                                    caption='Select your payment method'
                                    font={{"color":"var(--colors-primary-main)","weight":600,"size":"18px","transform":"uppercase"}}
                                >
                                </i-label>
                                <i-label
                                    caption='(Click one option below)'
                                >
                                </i-label>
                            </i-hstack>
                            <i-hstack
                                id='pnlPaymentSelect'
                                verticalAlignment='center'
                                gap={16}
                                border={{"radius":"3px","width":"1px","style":"solid","color":"var(--divider)"}}
                                background={{"color":"var(--colors-secondary-light)"}}
                                padding={{"top":"21px","right":"21px","bottom":"21px","left":"21px"}}
                            >
                            </i-hstack>
                        </i-vstack>
                        <i-vstack
                            border={{"radius":"0 0 4px 4px","width":"1px","style":"solid","color":"var(--divider)"}}
                            width='100%'
                            padding={{"top":"15px","bottom":"20px","left":"25px","right":"25px"}}
                            gap={20}
                        >
                            <i-hstack
                                gap='10px'
                                verticalAlignment='center'
                                wrap="wrap"
                            >
                                <i-label
                                    caption='Payment methods'
                                    font={{"weight":600,"size":"16px","transform":"uppercase"}}
                                >
                                </i-label>
                                <i-hstack
                                    verticalAlignment='center'
                                    gap={10}
                                >
                                    <i-image
                                        url={this.selectedPayment.img}
                                        width={25}
                                        stack={{"shrink":"0"}}
                                    >
                                    </i-image>
                                    <i-label
                                        caption={this.selectedPayment.name}
                                        lineHeight='1rem'
                                        font={{"transform":"uppercase"}}
                                    >
                                    </i-label>
                                </i-hstack>
                                <i-hstack
                                    id='pnlWeb3Name'
                                    verticalAlignment='center'
                                    gap='10px'
                                    visible={false}
                                >
                                    <i-hstack
                                        verticalAlignment='center'
                                    >
                                        <i-icon
                                            image={{"url":"https://static.travala.com/resources/images-pc/icon/wallet.svg","width":25,"height":25}}
                                            stack={{"shrink":"0"}}
                                            padding={{"left":5,"right":5,"bottom":5,"top":5}}
                                            width='32px'
                                            height='32px'
                                            background={{"color":"var(--background-main)"}}
                                            border={{"radius":"50%","width":"2px","style":"solid","color":"var(--colors-primary-main)"}}
                                            position='relative'
                                            zIndex={30}
                                        >
                                        </i-icon>
                                        <i-hstack
                                            width='154px'
                                            height='28px'
                                            margin={{"left":"-10px"}}
                                            border={{"radius":"4px","width":"1px","style":"solid","color":"var(--colors-primary-main)"}}
                                            background={{"color":"var(--colors-primary-light)"}}
                                            verticalAlignment='center'
                                            horizontalAlignment='center'
                                        >
                                            <i-label
                                                caption='0xd2...8019'
                                                font={{"size":"14px","weight":600}}
                                            >
                                            </i-label>
                                        </i-hstack>
                                    </i-hstack>
                                    <i-button
                                        caption='BNB Smart Chain (BEP20)'
                                        icon={{"image":{"url":"https://static.travala.com/coin-logo/bnb.png","width":20,"height":20,"stack":{"shrink":"0"}}}}
                                        padding={{"top":4,"bottom":4,"left":6,"right":6}}
                                        boxShadow='none'
                                        background={{"color":"var(--background-main)"}}
                                        minHeight='40px'
                                        font={{"color":"var(--text-primary)"}}
                                        lineHeight='17px'
                                        border={{"width":"1px","style":"solid","color":"var(--divider)","radius":4}}
                                        rightIcon={{"name":"angle-down"}}
                                    >
                                    </i-button>
                                </i-hstack>
                            </i-hstack>
                            <i-panel
                                id='pnlPaymentInfo'
                            >
                                <i-vstack
                                    id='pnlWeb3'
                                    gap={15}
                                    visible={false}
                                >
                                    <i-label
                                        caption='Select Cryptocurrency'
                                        font={{"weight":600,"size":"16px"}}
                                    >
                                    </i-label>
                                    <i-input
                                        placeholder='Select Cryptocurrency'
                                        width='100%'
                                        height='50px'
                                        padding={{"left":20,"right":20}}
                                        font={{"size":"15px"}}
                                        background={{"color":"transparent"}}
                                        border={{"width":"1px","style":"solid","color":"var(--divider)","radius":3}}
                                    >
                                    </i-input>
                                    <i-panel
                                        display='inline'
                                    >
                                        <i-label
                                            caption='Cryptocurrency Refund Policy:'
                                            display='inline'
                                            font={{"weight":600,"size":"12px"}}
                                        >
                                        </i-label>
                                        <i-label
                                            caption='Due to price volatility and regulatory requirements, refunds (if applicable) will be processed in Travel Credits and credited to your Travala.com account.'
                                            display='inline'
                                            padding={{"left":4}}
                                            font={{"size":"12px"}}
                                        >
                                        </i-label>
                                        <i-label
                                            caption='Learn more.'
                                            padding={{"left":4}}
                                            display='inline'
                                            cursor='pointer'
                                            font={{"size":"12px","weight":600}}
                                        >
                                        </i-label>
                                    </i-panel>
                                </i-vstack>
                                <i-vstack
                                    id='pnlCreditCard'
                                    visible={false}
                                    gap="15px"
                                >
                                    <i-panel
                                        display='inline'
                                    >
                                        <i-label
                                            caption='Important:'
                                            display='inline'
                                            font={{"color":"var(--colors-error-main)","weight":600,"style":"italic"}}
                                        >
                                        </i-label>
                                        <i-label
                                            caption='Please fill out your credit/debit card details below to pay for your booking in a simple and secure way.'
                                            font={{"style":"italic"}}
                                            padding={{"left":4}}
                                            display='inline'
                                        >
                                        </i-label>
                                    </i-panel>
                                    <i-hstack
                                        verticalAlignment='center'
                                        gap={10}
                                    >
                                        <i-image
                                            url="https://static.travala.com/resources/images-pc/stripe/visa.png"
                                            width="auto" height="40px"
                                        ></i-image>
                                        <i-image
                                            url="https://static.travala.com/resources/images-pc/stripe/master-card.png"
                                            width="auto" height="40px"
                                        ></i-image>
                                        <i-image
                                            url="https://static.travala.com/resources/images-pc/stripe/american.png"
                                            width="auto" height="40px"
                                        ></i-image>
                                    </i-hstack>
                                    <i-label
                                        caption='Card number*'
                                        font={{"weight":600}}
                                    >
                                    </i-label>
                                    <i-hstack
                                        verticalAlignment='center'
                                        gap={8}
                                        height={40}
                                        background={{"color":"var(--input-background)"}}
                                        padding={{"left":15,"right":15}}
                                        border={{"radius":4, width: '1px', style: 'solid', color: Theme.divider}}
                                    >
                                        <i-icon
                                            name='credit-card'
                                            width='20px'
                                            fill='var(--input-font_color)'
                                            stack={{"shrink":"0"}}
                                        >
                                        </i-icon>
                                        <i-input
                                            width='100%'
                                            height='100%'
                                            placeholder='Card number'
                                            background={{"color":"transparent"}}
                                            border={{"width":0}}
                                        >
                                        </i-input>
                                        <i-button
                                            stack={{"shrink":"0"}}
                                            height={40}
                                            background={{"color":"transparent"}}
                                            border={{"radius":"4px"}}
                                            boxShadow='none'
                                            font={{"color":"var(--colors-primary-main)"}}
                                        >
                                            <i-label
                                                caption='Auto fill'
                                                font={{"weight":600}}
                                            >
                                            </i-label>
                                        </i-button>
                                    </i-hstack>
                                    <i-panel
                                        display='inline'
                                        opacity='0.7'
                                    >
                                        <i-label
                                            caption='All credit card data is securely processed through our payment partner '
                                            display='inline'
                                        >
                                        </i-label>
                                        <i-label
                                            caption='Stripe'
                                            font={{"weight":600}}
                                            display='inline'
                                        >
                                        </i-label>
                                    </i-panel>
                                </i-vstack>
                            </i-panel>
                        </i-vstack>
                    </i-vstack>
                    <i-vstack
                        position='relative'
                        width='100%'
                        padding={{"top":"20px","right":"20px","bottom":"20px","left":"20px"}}
                        background={{"color":"var(--background-main)"}}
                        border={{"width":"1px","radius":"3px"}}
                        gap={20}
                    >
                        <i-panel
                            display='inline'
                        >
                            <i-label
                                position='relative'
                                caption='Partial payment — Promo Credits, Travel Credits & AVA'
                                font={{"size":"15px","weight":"500"}}
                                display='inline'
                            >
                            </i-label>
                            <i-panel display="inline">
                                <i-icon
                                    id="infoIcon"
                                    name='exclamation-circle'
                                    width={14}
                                    height={14}
                                    padding={{"left":4}}
                                    fill='var(--text-secondary)'
                                    opacity='0.5'
                                    cursor='pointer'
                                >
                                </i-icon>
                                <i-popover
                                    id='infoPopover'
                                    placement='top'
                                    trigger="hover"
                                    visible={false}
                                    isArrowShown={true}
                                    minWidth="300px"
                                    maxWidth="70%"
                                    border={{ "color": Theme.divider, "width": "1px", style: 'solid', radius: 5 }}
                                    background={{color: Theme.colors.warning.main}}
                                >
                                    <i-panel padding={{ top: 4, bottom: 4, left: 4, right: 4 }} border={{ radius: 'inherit' }}>
                                        <i-vstack
                                            gap={8}
                                        >
                                            <i-label
                                                caption='Partial payment'
                                                display='block'
                                                padding={{ "bottom": 8 }}
                                                font={{ "size": "15px", "weight": 600 }}
                                            >
                                            </i-label>
                                            <i-panel display="inline">
                                                <i-label
                                                    caption='Did you know that you can make a partial payment for this booking in Travel Credits, Promo Credits or AVA?'
                                                    display="inline"
                                                    font={{size: '12px', style: 'italic'}}
                                                >
                                                </i-label>
                                                <i-label
                                                    caption='Learn more'
                                                    display="inline"
                                                    font={{ size: '12px', style: 'italic', color: Theme.colors.primary.main }}
                                                    link={{href: ""}}
                                                    padding={{left: '4px'}}
                                                >
                                                </i-label>
                                            </i-panel>
                                        </i-vstack>
                                    </i-panel>
                                </i-popover>
                            </i-panel>
                        </i-panel>
                        <i-panel
                            display='inline'
                        >
                            <i-label
                                caption="You don't have enough Travel Credits, Promo Credits, AVA in your account. Send AVA to"
                                display='inline'
                            >
                            </i-label>
                            <i-label
                                caption='your account'
                                font={{"weight":600,"color":"var(--colors-primary-main)"}}
                                display='inline'
                                padding={{"left":4}}
                            >
                            </i-label>
                            <i-label
                                caption='or top up your'
                                display='inline'
                                padding={{"left":4}}
                            >
                            </i-label>
                            <i-label
                                caption='Travel Credits.'
                                font={{"weight":600,"color":"var(--colors-primary-main)"}}
                                display='inline'
                                padding={{"left":4}}
                            >
                            </i-label>
                        </i-panel>
                    </i-vstack>
                    <i-vstack
                        position='relative'
                        width='100%'
                        padding={{"top":"20px","right":"20px","bottom":"20px","left":"20px"}}
                        background={{"color":"var(--background-main)"}}
                        border={{"width":"1px","radius":"3px"}}
                        gap={20}
                    >
                        <i-panel
                            display='inline'
                        >
                            <i-label
                                caption='By completing this booking, you agree to the'
                                display='inline'
                            >
                            </i-label>
                            <i-label
                                caption='Booking Conditions, Terms and Conditions'
                                font={{"weight":600,"color":"var(--colors-primary-main)"}}
                                display='inline'
                                padding={{"left":4}}
                            >
                            </i-label>
                            <i-label
                                caption=', and'
                                display='inline'
                                padding={{"left":4}}
                            >
                            </i-label>
                            <i-label
                                caption='Privacy Policy.'
                                font={{"weight":600,"color":"var(--colors-primary-main)"}}
                                display='inline'
                                padding={{"left":4}}
                            >
                            </i-label>
                        </i-panel>
                        <i-hstack
                            position='relative'
                            width='100%'
                            gap={8}
                            verticalAlignment='center'
                        >
                            <i-image
                                position='relative'
                                width='24px'
                                height='24px'
                                stack={{"shrink":"0"}}
                                url='https://static.travala.com/resources/images-pc/icon/green-clock.svg'
                            >
                            </i-image>
                            <i-label
                                font={{"color":"var(--colors-success-main)","weight":600}}
                                caption='BOOK NOW RISK FREE! Enjoy no cancellation fees before 18:00:00, 25 December 2024 (property local time)'
                            >
                            </i-label>
                        </i-hstack>
                    </i-vstack>
                </i-vstack>
                <i-vstack
                    stack={{"basis":"33%", shrink: '0'}}
                >
                    <i-hstack
                        verticalAlignment='center'
                        gap='8px'
                        width='100%'
                        boxShadow='1.3px 11.9px 33px 0 rgba(0,0,0,.07)'
                        justifyContent='space-between'
                        padding={{"left":15,"right":15}}
                        margin={{"bottom":15}}
                        height='46px'
                    >
                        <i-label
                            caption='Guest Information'
                            font={{"weight":600,"size":"15px"}}
                        >
                        </i-label>
                        <i-button
                            caption='View'
                            rightIcon={{"name":"angle-down","width":16,"height":16,"fill":"var(--colors-primary-main)"}}
                            background={{"color":"transparent"}}
                            font={{"color":"var(--colors-primary-main)","weight":600,"size":"15px"}}
                            boxShadow='none'
                            onClick={this.handleViewInfo}
                        >
                        </i-button>
                    </i-hstack>
                    <i-vstack
                        border={{"radius":"4px"}}
                        width='100%'
                        background={{"color":"var(--background-main)"}}
                    >
                        <i-vstack
                            width='100%'
                            padding={{"top":"14px","bottom":14,"left":"25px","right":"25px"}}
                        >
                            <i-hstack
                                horizontalAlignment='space-between'
                                gap={20}
                            >
                                <i-panel
                                    stack={{"basis":"150px"}}
                                    border={{"radius":"10px"}}
                                >
                                    <i-image
                                        url='https://i.travelapi.com/lodging/42000000/41900000/41899600/41899529/59cd236e_z.jpg'
                                        width='100%'
                                        height='100%'
                                    >
                                    </i-image>
                                </i-panel>
                                <i-vstack
                                    stack={{"grow":"1"}}
                                    gap={8}
                                >
                                    <i-panel
                                        display='inline'
                                    >
                                        <i-label
                                            id="lblHotelName"
                                            caption=""
                                            font={{"size":"15px","weight":600}}
                                            display='inline'
                                        >
                                        </i-label>
                                        <i-panel
                                            id="pnlRoomStar"
                                            display='inline'
                                            padding={{"left":4}}
                                        ></i-panel>
                                    </i-panel>
                                    <i-hstack
                                        gap={4}
                                        verticalAlignment='center'
                                    >
                                        <i-icon
                                            name='map-marker-alt'
                                            width='1rem'
                                            height='1rem'
                                        >
                                        </i-icon>
                                        <i-label
                                            id="lblHotelAddress"
                                            caption=""
                                            font={{"size":"12px","weight":600}}
                                        >
                                        </i-label>
                                    </i-hstack>
                                    <i-hstack
                                        gap={8}
                                        verticalAlignment='center'
                                    >
                                        <i-vstack
                                            background={{"color":"url(https://static.travala.com/frontend/images-pc/group.png) no-repeat center/80%"}}
                                            width={42}
                                            height={42}
                                            border={{"radius":"50%"}}
                                            stack={{"shrink":"0"}}
                                            verticalAlignment='center'
                                            horizontalAlignment='center'
                                        >
                                            <i-label
                                                id="lblHotelPoint"
                                                caption=''
                                                font={{"color":"#fff"}}
                                                margin={{"top":"-5px","right":"0px","bottom":"0px","left":"0px"}}
                                            >
                                            </i-label>
                                        </i-vstack>
                                        <i-vstack
                                            gap={4}
                                            verticalAlignment='center'
                                        >
                                            <i-label
                                                id="lblHotelState"
                                                caption=''
                                                font={{"size":"18px","weight":600,"color":"var(--colors-success-main)"}}
                                            >
                                            </i-label>
                                            <i-label
                                                id="lblHotelReviewers"
                                                caption=''
                                                font={{"size":"13px","weight":600}}
                                            >
                                            </i-label>
                                        </i-vstack>
                                    </i-hstack>
                                </i-vstack>
                            </i-hstack>
                        </i-vstack>
                    </i-vstack>
                    <i-hstack
                        width='100%'
                        gap={16}
                        padding={{"top":"15px","right":"25px","bottom":"15px","left":"25px"}}
                        justifyContent='space-between'
                        alignItems='center'
                        minHeight={80}
                        background={{"color":"var(--colors-primary-light)"}}
                    >
                        <i-vstack
                            width='100%'
                            gap={6}
                            class='text-center'
                        >
                            <i-label
                                caption='Check in'
                            >
                            </i-label>
                            <i-label
                                caption='28 Dec 2024'
                                font={{"size":"15px","weight":600}}
                            >
                            </i-label>
                            <i-label
                                caption='From 2:00 PM'
                                font={{"size":"12px"}}
                            >
                            </i-label>
                        </i-vstack>
                        <i-icon
                            width='20px'
                            height='20px'
                            name='long-arrow-alt-right'
                            stack={{"shrink":"0"}}
                        >
                        </i-icon>
                        <i-vstack
                            width='100%'
                            gap={6}
                            class='text-center'
                        >
                            <i-label
                                caption='Check out'
                            >
                            </i-label>
                            <i-label
                                caption='31 Dec 2024'
                                font={{"size":"15px","weight":600}}
                            >
                            </i-label>
                            <i-label
                                caption='From 12:00 PM'
                                font={{"size":"12px"}}
                            >
                            </i-label>
                        </i-vstack>
                        <i-hstack
                            width='100%'
                            gap={4}
                            verticalAlignment='center'
                            class='text-center'
                        >
                            <i-icon
                                width='18px'
                                height='18px'
                                name='moon'
                            >
                            </i-icon>
                            <i-label
                                caption='3 nights'
                            >
                            </i-label>
                        </i-hstack>
                    </i-hstack>
                    <i-vstack
                        gap='8px'
                        padding={{"left":"25px","right":"25px","top":15,"bottom":15}}
                        background={{"color":"var(--background-main)"}}
                        border={{"radius":"0 0 4px 4px"}}
                    >
                        <i-label
                            caption='1 room: Family Loft'
                            font={{"size":"15px","weight":"600"}}
                        >
                        </i-label>
                        <i-panel
                            width='100%'
                        >
                            <i-label
                                caption='Breakfast Included, '
                                font={{"color":"var(--colors-success-main)","size":"15px"}}
                            >
                            </i-label>
                            <i-label
                                caption='2 Queen Beds and 1 Large Twin Bed'
                                font={{"size":"15px"}}
                            >
                            </i-label>
                        </i-panel>
                        <i-label
                            caption='Room 1: 3 adults'
                            font={{"size":"15px"}}
                        >
                        </i-label>
                        <i-hstack
                            width='100%'
                            gap={4}
                            verticalAlignment='center'
                        >
                            <i-label
                                caption='Free Cancellation'
                                font={{"color":"var(--colors-success-main)","size":"15px","weight":600}}
                            >
                            </i-label>
                            <i-panel                            >
                                <i-icon
                                    id='policyIcon'
                                    name='exclamation-circle'
                                    width={14}
                                    height={14}
                                    fill='var(--text-secondary)'
                                    opacity='0.5'
                                    cursor='pointer'
                                >
                                </i-icon>
                                <i-popover
                                    id='policyPopover'
                                    placement='top'
                                    visible={false}
                                    trigger="hover"
                                    minWidth="300px"
                                    maxWidth="70%"
                                    border={{"color": Theme.divider,"width":"1px", style: 'solid', radius: 5}}
                                >
                                    <i-panel padding={{top: 4, bottom: 4, left: 4, right: 4}} border={{radius: 'inherit'}}>
                                        <i-vstack
                                            gap={8}
                                        >
                                            <i-label
                                                caption='Cancellation Policy'
                                                display='block'
                                                padding={{"bottom":8}}
                                                font={{"size":"15px","weight":600}}
                                                border={{"bottom":{"width":"1px","style":"solid","color":"var(--divider)"}}}
                                            >
                                            </i-label>
                                            <i-vstack
                                                id="pnlPolicy"
                                                gap={8}
                                            >
                                                <i-label
                                                    caption='Free cancellation until 25 December 2024 18:00 (GMT+07:00).'
                                                >
                                                </i-label>
                                                <i-label
                                                    caption='Cancellations between 25 December 2024 18:00 (GMT+07:00) and 28 December 2024 18:00 (GMT+07:00) will result in a 50% penalty of the stay charges and fees.'
                                                >
                                                </i-label>
                                                <i-label
                                                    caption='The end time for the cancellation window is 28 December 2024 18:00 (GMT+07:00) at which time the booking will become fully non-refundable.'
                                                >
                                                </i-label>
                                                <i-label
                                                    caption='If you fail to check-in for this reservation, or if you cancel or change this reservation after check-in, you may incur penalty charges at the discretion of the property of up to 100% of the booking value.'
                                                >
                                                </i-label>
                                            </i-vstack>
                                        </i-vstack>
                                    </i-panel>
                                </i-popover>
                            </i-panel>
                        </i-hstack>
                    </i-vstack>
                    <i-panel                    >
                        <i-hstack
                            width='100%'
                            gap={8}
                            minHeight={46}
                            verticalAlignment='center'
                            margin={{"top":15}}
                            background={{"color":"var(--colors-success-light)"}}
                            border={{"radius":"3px","width":"1px","style":"solid","color":"var(--colors-success-main)"}}
                            boxShadow='.4px 4px 13px 0 rgba(0,0,0,.05)'
                            stack={{"grow":"0"}}
                            padding={{"top":10,"bottom":10,"left":15,"right":15}}
                        >
                            <i-icon
                                name='dollar-sign'
                                width={16}
                                height={16}
                                stack={{"shrink":"0"}}
                                fill='var(--colors-success-main)'
                            >
                            </i-icon>
                            <i-panel
                                display='inline'
                            >
                                <i-label
                                    caption='Approx.'
                                    font={{"size":"15px"}}
                                >
                                </i-label>
                                <i-label
                                    id='lblPrice'
                                    caption='US$10.95'
                                    font={{"size":"15px","bold":true,"color":"var(--colors-success-main)"}}
                                    padding={{"left":4}}
                                    display='inline'
                                >
                                </i-label>
                                <i-label
                                    caption='in AVA giveback with FREE Smart membership'
                                    font={{"size":"15px"}}
                                    padding={{"left":4}}
                                    display='inline'
                                >
                                </i-label>
                            </i-panel>
                        </i-hstack>
                    </i-panel>
                    <i-hstack
                        width='100%'
                        gap={8}
                        minHeight={46}
                        verticalAlignment='center'
                        margin={{"top":15}}
                        background={{"color":"var(--colors-error-light)"}}
                        border={{"radius":"3px","width":"1px","style":"solid","color":"var(--colors-error-main)"}}
                        boxShadow='.4px 4px 13px 0 rgba(0,0,0,.05)'
                        stack={{"grow":"0"}}
                        padding={{"top":10,"bottom":10,"left":15,"right":15}}
                    >
                        <i-icon
                            name='history'
                            width={16}
                            height={16}
                            stack={{"shrink":"0"}}
                            fill='var(--colors-error-main)'
                        >
                        </i-icon>
                        <i-label
                            caption='Hurry! Our last room for your dates at this price'
                            font={{"color":"var(--colors-error-main)","size":"15px","weight":600}}
                        >
                        </i-label>
                    </i-hstack>
                    <i-panel
                        width='100%'
                        margin={{"top": 30}}
                        background={{"color":"var(--background-main)"}}
                        border={{"radius":"3px","width":"1px","style":"solid","color":"var(--colors-primary-main)"}}
                        boxShadow='.4px 4px 13px 0 rgba(0,0,0,.05)'
                        padding={{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}
                    >
                        <i-image
                            url='https://static.travala.com/resources/images/checkout/best-price-v2.svg'
                            width='108px'
                            top={-15}
                            left={0}
                            zIndex={99}
                        >
                        </i-image>
                        <i-hstack
                            verticalAlignment='center'
                            horizontalAlignment='space-between'
                            gap={4}
                            background={{"color":"var(--colors-primary-light)"}}
                            padding={{"top":"15px","right":"15px","bottom":"15px","left":"15px"}}
                            border={{"radius":"0 0 3px 3px"}}
                            alignItems='start'
                        >
                            <i-vstack
                                width='100%'
                                gap={5}
                            >
                                <i-label
                                    caption='Final Price'
                                    font={{"size":"16px","weight":600}}
                                    padding={{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}
                                >
                                </i-label>
                                <i-hstack
                                    verticalAlignment='center'
                                    gap={4}
                                >
                                    <i-label
                                        caption='Taxes Included'
                                        font={{"size":"12px","color":"var(--text-secondary)"}}
                                    >
                                    </i-label>
                                    <i-icon
                                        name='exclamation-circle'
                                        width={14}
                                        height={14}
                                        fill='var(--text-secondary)'
                                        tooltip={{ content: "Tax Recovery Charges and Service Fees: US$74.67 per booking", placement: 'top' }}
                                    >
                                    </i-icon>
                                </i-hstack>
                            </i-vstack>
                            <i-vstack
                                width='100%'
                                gap={5}
                            >
                                <i-label
                                    caption='US$622.14'
                                    font={{"size":"16px","weight":600}}
                                >
                                </i-label>
                                <i-panel                                >
                                    <i-label
                                        caption='No surprises! Final price'
                                        padding={{"left":4,"right":4,"top":4,"bottom":4}}
                                        border={{"radius":"4px","width":"1px","style":"solid","color":"var(--colors-primary-main)"}}
                                        font={{"size":"12px", color: Theme.colors.primary.contrastText}}
                                        background={{"color":"var(--colors-primary-main)"}}
                                    >
                                    </i-label>
                                </i-panel>
                                <i-label
                                    caption='Cryptocurrency accepted'
                                    font={{"size":"12px","color":"var(--colors-success-main)","weight":600}}
                                >
                                </i-label>
                            </i-vstack>
                        </i-hstack>
                        <i-vstack
                            width='100%'
                            padding={{ "top": "15px", "right": "15px", "bottom": "15px", "left": "15px" }}
                            gap={8}
                        >
                            <i-hstack
                                width='100%'
                                gap={8}
                                horizontalAlignment="space-between"
                            >
                                <i-panel display="inline">
                                    <i-label
                                        caption='Price summary (1 room x 3 nights)'
                                        font={{ weight: 600, size: '15px' }}
                                        display="inline"
                                    >
                                    </i-label>
                                    <i-label
                                        caption='(1 room x 3 nights)'
                                        font={{ size: '15px' }}
                                        display="inline"
                                        padding={{left: 4}}
                                    >
                                    </i-label>
                                </i-panel>
                            </i-hstack>
                            <i-hstack
                                width='100%'
                                gap={8}
                                horizontalAlignment="space-between"
                            >
                                <i-label caption="Payment with Web3 Wallet" font={{ size: '13px' }}></i-label>
                            </i-hstack>
                        </i-vstack>
                    </i-panel>
                </i-vstack>
            </i-stack>
        </i-panel>
    }
}