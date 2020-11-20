import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View, NativeAppEventEmitter } from 'react-native';
import home from './assets/home.png';
import sleep from './assets/sleep.png';

class FoodScreen extends React.Component{
 static navigationOptions = {
   title : 'Food',
 };
 render(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source  = {{uri:'https://wallpaper.dog/large/5110.jpg'}}style ={{width:500,height:800}}></ImageBackground>
      <Text style = {styles.pic}>Calorie Counter</Text>

      <TouchableOpacity onPress= {() => this.props.navigation.navigate('Breakfast')} style = {styles.breakfast}>
        <Image source = {{uri:'https://previews.123rf.com/images/milkos/milkos1710/milkos171002300/88056302-rich-breakfast-menu-background-french-crusty-croissants-muesli-yogurt-honey-and-boiled-eggs-for-tast.jpg'}} style = {{width:315,height:120,position:'absolute'}}></Image>
        <Text style = {styles.bigText}>    Breakfast    </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress= {() => this.props.navigation.navigate('Lunch')} style = {styles.lunch}>
        <Image source = {{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCRYXFhgWFhYnIRcgLyknMScvKh4nKScnLyosLykvKCcpKR0eJx8dHycnIh0iHR0dHR0dJycdHR0dHh0dHR0BCAUGEA8QEBESEhISEhUVFRUSFRUVFRUVFRUVFRUVFRUXFRcVFxUVFRUXFRUVHxUWGB0dHR0VFSElIR0lFx0dHf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBQYHBAj/xABDEAABAwEEBgcGBQIGAQUBAAABAAIRAwQSITEFQVFSYZETcYGhsdHwBiIyQmKiU3LB4fGCkgcUIzPC0rIWJEPi8hX/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADwRAAIBAwICBggDBgcBAAAAAAACAQMREgQhBTETIjJBUVIGQmFxkaGx8IGCohRicpLB4RYjQ3Oy0vEH/9oADAMBAAIRAxEAPwDtkopQ1FSQFAlSVWTKAsBRShFARRAhCEASlJULVLqEFZQgqyEC1CuIl1G6iQfX8qBBiC6pdRhSExAIRhQhC6mIIq3p4SlqWLHnMeilBV5b6hAt9R+6sUsVl6Q1W6zBTuYOHrtWOtLh8pBWvrq+Cy0E2k9Votga2Yk7PM6guX6Z0+57xSpGajsJ1dmwcda2ploqFz2ADDHE4EeO3Bc6ZQdZ7cxtQe8Zde1Eychqicupa2k41kjzC4tj1Ts8BqosPfHPHq+06joXRLKNMNbi84l2sny3QvXa3BuCNktMjUvFbWEyZK4usrw1O/aae0cjWPLS0zzMdUtbC6C8TsVdpYKjS1zcO8dR1Fa8zR9R9e8CLo6+6Nvmttc2GkYSPWC05pYYurb9owK2OMxO5rWjNKvo1nMcffHJ7f8At66+kWa1te0PacDzB4rivtM+5WpvGE4TsI/krZ9AaVcAHOMTgRnI28Mxz4r2/D63TU1ae3j8Tv1tP01OHjt4/E6WHIhUtVgQ4o11RSVEB6BZfrdzHkiaH1u5/sr7yrLuSqXKTQ+t0dY8lX/k5ze/n44L1gIlAUizDecf6nI9A3aebvNWJShAnRDjzcf1TXB6JRMpTKFRDSbOvrl0eOaAszeOH1O81HAoBpGtTYrctbZ2jbzcfEoCk3HPm7zSmdqgJGv9VBZWHNBuw83earNFuw83eaI61CeKDInQN9F3mkNJm3vPmmDuJ5qE8e9WIKH0GHP/AMnD9QqxYGEfMf63/wDZesTtPNAjj+qEHmZZmfUOBc/9T4IGyMk4GNt58d5Xpl29h1BVvBOsICgWOnqn+50eMFA2enECTwvOPgU7mk6wTz8clitKaS6FhJdljOMxwE5nJqsqXm0GXS0mdsYg9NVrGzdkkfU4gcyccuaxDw9wLhABwjb2rFaJ0g6s0kEBxJMZgDidbsj+YlB7qjXPaXi6cRgRjrnHjK8t6Q1JapK26sXjn2p+7ltZSwaV8B20z8d/3tmxcz9prdU/zNNzoAAwxnDX66ltFW0vaHsD8dueK1ivod9c33OJd2R4LFwyqqTd+rGOP9De4Rw93nOO433QmlA6m3HHxWxCuCFyfQdmtLKwoNbOudQHEnLqW91w+kQHECdU5nYMM4Bz2LW1dB1acesnqspqcS02LW7/ACmfo02zewEpbSGgQ04rH0nVLl+4ROMSJjqnuVdRtZ1Mva0AkYAkgk8YBhNPSm2OO5qrTNC9orS11cU8y1sxqkxn1DGOKzPsvRvUXPdiTh2z6K1DRuj6tatUdVwzD3bpnJu12ERlC6tojRgYGwCGDIY48TtK9vwqj0dOL9x6Km8UqV2/KbJTosECCSPzL0sazZ4qrCIGXirGtUHnnHus2eKikD0FEIMwCgAl6Ru1Q1G7VQyFkqXlX0jdqU1G7QguXAoFVdI3eCHSN3ghFyyVCq77d5EVG7QhIS1IWpi9u1AubtQriCOHioWoX27UQ9u1NxjBA0KQgXt2pTUbtQbDwgYS9I3b4qGoNvcUIuKYSwmNVu3uKAqtOE9ysRiVPc0S5xho1kwBlmTgNSoslus9ZzmUqwc8YxiDG3USJ1j3Vp+n9JtxLjgMQIwA2xrcdvyzd3p1f2Os7n2s2xziAzD8xOr8oafe+ot+pTbYy06UWOuvzInEYLn/ALYOcWkNMS5onhHmVu2k7Qyk4Oc6Gu18f4WuaTdSrN90zOBEO8Yw/wCOCtRvOUeK9U3ODVsKn/H3mn6M0PXbXYaNSKYm8MIPXIxk6/ia34VlhZyTNZ8vGoSBHCf1WvHSVWw1X3xeouGGYM6gTjDgCb234l6q9vdXghsDbrXmOOK6vEvBt19DWr1Jvvy3KP8ALg1nExGWwQs7Z6IaMOepY+yUnSSdaztNvu4CIwXn9dUzvuepo0uiSFPI+1NoOvxIOG09m3NW6Rsleq5jwMB8uE+9hMzHutLjE+8q9LkANj4hB7cFiK/tiGhjmtkA45ZDPXid1b/B1bHHrNb4HnvSPS9ZHiOZtdr0iaFNvTADVOJE8IxC1eze0/SB4Yw3cpwA8ZPUO5NprSbLXRa1rSWOgzBbgDOEjGYiR7q9OhrNSZD34EZNxho/U+ur0HDuFQ3+ZUy/dXlscxaSpGVT8qmU0Noq62/U14xxJzPE7FssrWKunmBzpdgMABhePE5xwCspaaZUe9jMxAzMREknXAjvW43E1mcfVU0tVrZebybO1/FXBywgtDZaC/PI5SerUsjSLT8x71loVleMoMatc915RC6NpQWTYnczoKa8kCZVMgJUlQpSgGkISllBANKkpC5S8hA8qSq7yl5QSWShPBV3lLykgsngheVd5C8gLC5LeSyoChUhcq3HA7YVhSxGKA5RpdkB84zhGcdSxOifaFlBvROZ7oJN5uYJ2g58w7D5lvGn9HH3iBgcZ9a1y+pomrVfcpMvuOoCeZyA4n3VmXeDNRaLWk7S20tr2WjVY6WnCcQZGGRxGLSvPRrGMyqKNMWOzWezOMluZ2OMntEuPcpWEOkZHFYyj2MPpbRzKjXNLZYdWsHhs+k/0rSKIdQd0T8dh1OHmMnDVyXUS2RlPYCFruldFte0tdlqO6fPxHuuVOIaRdSmM9r1WO96PcXxnFuf1PHQrtjNZBlva0TErmFrtVazPuPE6wZwI1fxqVH/APXq1SG02y4+tS8l/hiqr7HoKnEaLbTLfw2m5ulp0nTdWax7vdOOcTwnV62qqvoig09I5sMGNzJp2F2wcPnXnsOiGUAa9qINQYwcQ3r2v3QtZ0xpZ9d2ykMYnEna7jw+X7l6Ph/Cl08QzTefL4z7Ti8V1S3yb8qmfqaXa506vHs1DdC2/R9EOaDUeWg4RIDjzyXPdEaPyqPAnMDDDjG3dGr4t1Zl9pc52eA1T6zWDiuudtlPLa7W9K02m/33Hh0rVay0VmtwazAYk6tu3GV4rFWIaDJBdj2fwsRbrSXB79bj3fwF6KFT3cssJWKaHV3KSlzdNC219a0UWOOAM+uwLsDAFwbQ+lG2V/TkTECNs4Hqwldr0dpKlaGCpSdIOrCQeIW3wtYiJglWiJsZNRLeUW8XMmAoQqukfu97VOkfu97ULlhKW8kNV+5Pa1Q1X/hnm3zQDyokNR34Z5t80t924ebfNVKlxPBLHBUmo/8ACJ7W+aPSP/CPNnmgLbqWAqjVf+GebfNAVH/hnm3zSwyLi1COCXpH/h94Q6V8/wC2euWx4oB44dyJHBVmq/cJ7W+aHTP/AAjzb5piB4RCr6R/4Z5t80ekf+GebfNLAthVlLffuHm3zQD3/hn+5vmrBit9UjLlmhQtLrwECNkAeCZ1V8/7Z/ub5rFaZtj2UT0bSKrsJkEgayDlOIDfqN7UgW5TpS02MOLK1pYxx1Et88B1r0mwwxoDrwxhw2ascdXguD6Rpm8ZGJ4ySeJ1lbV7Je1Bszm2euf9B2En/wCM6uph+bd+LeUshm6LbY6SxnAoVKQIgiQVk6zLroiRnqVJ/KOYVDBF4NK0loljmm8AaecOAw7Tl1yMwsVQsTKLS6kxoG0QTHAknVjK27Srrway6ffMRhkMXSeXJYTSpu0HFoxeYA4f/kR2rg670mqq1lx3aVW8b4x33udKjxN4jfH+L1jm2lzXquvOwpjEDEgdc4lxnMrz2SxtaDVrYMGMbT1a8fhGv5vdBneNIMYxgc+BrjgNfVej8zhdaucW7SAtLrvwgfD/APbVJjMZZfCsvDdbUrxk3xOZxDVtUmVif9xvD2ffI91l0oX1HuyBEDgP+xzcf+MK99phrruLyIGvHVlmtVpl1NzmkEHKPX2ldW0JZWUqLIAcXQb2Bk9esMB93Nubm8c2tSF39xjilCxtyOdU9G2ipTFyi4gcI27YnsUDXNBa4EOGEawV1+RiSCdW31qvdaxVvosrNLHATqMYg8DqyF49bVjXXQ21jJc590D60UmZnHqHFbxoXQ9oshv06uO6RAPf64fEta9l7R0Nqe2pg7LbiDt1rrBtzLry4gk69hXK45xKrRdaabetlbn98jq6fhqsm8XCz2qoQL7S1+sYYHmouZ6R0XXr1X1adnLmOyM5gCP0UXSp8Wm0XenE233Xn/MajcGfzfoPoq8oTsTABBdwwhChclhEhVJDKWeCMJXIVYJeULx2pVEIHBQx1fohKUlAWYoSUiWUGRYXH0P3QvnZ+yQuQBxQsW30pcdSAQcEuRMTYckjX4IlxCrbnqUJMqxGQxJ2LE6RpktB2Ya/WqO0LKQq6jQRiq5Fziel7KWvLo8gtOfUJddmRz8V2/SuiC6bonhr7Nq0Kr7NVL0ikS7qIA6yfd7FkyuZVfY3b2O0ybRZixxmpRN2dZb8s8i3svLYzWwJwgY5rStFWdlgpvLjNWpmG5ADLPCZJLjAbj8LviPupaQBZf8Alz7BjzwjtXP4tqujpvMeXq+/u+ZiqNEtsXl16o87Bc/qdi7kD3LyaYuBzHOOFPJuHvOPgA2DPFWWN4p0xUqGPnJ4u2DbGEcVpdtNe32h1no4E/G75abd2dbjHvD4j8Gp8ea0mhmrU35JFv8At8zWr1pnqL25/THiVWqyvtr+gpy55MucDDWjj9I+Uf8AJH209nadns1mFNs1Ji9jkG9eROK6lonRNKy0RSpDDWcy47T/AMR8K1r27a4ssxaJAedU/Ic+RXf0yYRbwN3TaVUWxqXs97Kst+jnPJu12vcGu4Q33TtbM8Rjd+r2aPJp020KzblVnuluOMZGd141jafyrdPYxjW0HlsQXT2wvXp3QNO1NBvFtVuLX629e1vBX1C5raCtbT25Gn1HtLsDM6hjzM4DVyXmNUEy3HjJBAwynXiRjt4OWEtOlbTZKhpVmAkGZynjkZBiY+bFeOzaSquc513PCAMurhvb3Bc79lZZLaPRNUiZjlB66tmArODQCTr4u8pPJeK1WdzgGl5ujMSY5a8Fl7LScHOe8zPFoGJxEHEOEZyN1ew0Q6jUqHIHPAHsAnBNQsxMTE7nr+AVlqI6ujW2T7/GTbLNaGXGwcIUXF7VVIe4B5HCf3UXJn0Yv/qfp/uUqU1iZi3efVaBzVQDt8cj5olp3hy/de2PG3Lg4BCVTLt4cv3Uh28OR80Fy4FQkKmHbw5HzUuu3hyPmrC45hKShddvDkfNC67eHI+aEBvKXggb28OR80JdvDkfNANeSlyUuO8OR80A12pw5HzVQFOClFN28OR81OjdvDkfNBuNeUvBIabt4cj5qdE7eHI+agXkdFKGu3hy/dQtO8OX7qQN2JSUC1+8OR80pa7fHI+aYlhKgBzErFvsTL0xCyL2P3x/af8AsvI9lT8Rv9p/7JYoxhLbowVCBGWvPxWPtNiaxgpNycYJyEZu7IAHatrDHx8bYGPw59655bNJdPWaxz202EloJkic8euAIw1NvYrk8aWXZEjxyb8Pv5GDUajG0RHWbqqV2urVtVXobNhrvfLTbqe76oEUm/1LedE6JpWakKVJuGZdgXPdtdxP9rVbo/RbKFO4wHHEuMFzztcRrgRA90D3W3WrIjhHXE8+KyaejCxaDf0Wmimt56zz2mBOGGtaj7aU/wDRpPmLj5ngWOHie5bhOz16ha57UsvWYjVPYVar2ZNujSyaFnvMf7CVAaFXUBUywwF1pz1jE57StyJnw7VqHsXRLbM8B0EmZwkDDbww7FtgfqGrrkdYOOOHNRQbqwK2nwnGe4wmnNAU7XTh2FQZOg8iNbde834m3Vyapo19nc5jgbwgRqIPGBLIHxyL2Lfddeau5NdiRkRhwy27Ov5gVh9M6FbaaRaXXagktdExwcPma7C80/8Aldcr1EhoGmrzTbKP5fE5YLYHXpMiNgEnq4TC8lo0mW07k4bNZPUsTpOzV6D3Mc269uJbnhvNPzUzt+IfC7Je/QujnS2tVkvPwjYNvAx8O6Jduzp1dKq9Zp2g6up9LUVJhEu7Ty9pV/6fL/ee9wecwGyAdkzmMncZUXSrPTbcbDCRtUXOn0gny/ODkTw/Uzv03Pfl/c6YEUFF6054YUhBSEAYSlQjioCgFgopoUuhVFhIQITlgQu+vQQCGUBKs9esEPXrBAJePr+VA5EhC6oIDeUlTBMCgFkqFyYoE8FIEJSHrTpCUBU5xVTpV56lUWjYoIKSYG3V2LkXtBZyHnpgPivGMocM+oGL3WdhXX3N7FrOm9HvqthzQSMnZEdYxBB2YLlazSv02cdZcbe2DBrEmytHNGv7zz+z2m4u2eu6XZNccZGxxOufh3vzZ7vjGeJ4LilOxvF6iYD8LoOUTt3dbdmLfhiOgaA0s9w6KvBI+GoDIcOJGF7LH553lOnr74ybui1sPBtd3gtb9pXBtle4mSId2TGK2EnX2Zkeslg/aYgWOve+EAbNo1bRGvas7rtJuU6srOXgYT/D61dLZ3nWDEcVujKLWzAAJxPE8TrgCPy+6ue/4aACnaRPzNMbBB1bDGfzRwXQ3ka/CYUQsRGwatLzlIpxzGP6egkq1msa57iAwYk5YcSrC4ASTlyXH/aDS5t9XoaZ/wDasOLt93D6Rt/q2SmbFNRVVIykls0i7SFdtQNiz05u4e87aScxTGsfMYb8Xwee12gdIWg+63DtjHwVDraKTSW4Ae6BlgOGycOfzEr3aD0K6q0Pdrx7PNcrieojHKex3GLhmnl6mcxv9IMxZ6zi1pxUW30tHsa0CBgovOTq18D0ORt3YiAqL31H7fJGeJ+3yX0k8srF91SOpee99R+3yRvHeP2+SE5QXFqF1Ul54/b5IFxnMjtb5IRlBfCkKofnP2+SIH1n7fJBsOQVIKrDfrJ7W/oFA07x5jyQbFgaUbqquO3j9vkhH1n7fJAWFh2pTSPBAN+s/b5I3TvHu8kGME6Mo9GUoY7fP2+SN075+3yVRiMKZRuKo03b5H9vkoabvxHfb5KwxLbqrNPih0Z3z9vkh0JPzu+3yQYkuYKs0TwTmgfxHfb5JeiP4jvt8kIsIaR4Kl1DNek0Dvu+3yQNH63fb5KrDA0vT+j2OaS4Q4QAdmJJOHBcws9YsDjTcQ0wS0bZzAnB0fKHY/E3dXbdIWQEAEkjbh+nArmh9nn0nva5vunJ2YI6xkV5RNRNKpXh+Wd/j9/UxanTTsyc/r7zdfZ7TrLVSANSagwnCSNpEYHU75b3vNzV3tXjY6wmDGfb34rmraVSyV21mz4B446g7ifdd9PxLcvaTS7KmjatRrgSbojWDeAxGYOJwK69CvDx1Zyv2Tb0uoh1nzR2l8Dwf4aj/StM63MPZdXQnuw2+HZ2rSP8P6ZbQedZunXGWs9iPtNpd4Js9Ew4/E7dGwDMuOAb13tivWe0GytliZnlBivajTb6zjYqBOOD3Az/AEjicuewrFWizNs1G60AOOHZw27XH5nLPaK0Q2i2+4Q86t0R4x/b8KwOmaodWDdTBePrrgdq4NTiXS1OjTsLu0+Y02u85N+Vf6+/6GuUqBrVmUtQ8P3J7l2/R9kFNjWtAAC5J7ONArSZknu/nHtXaKR91aXpJWu6J6sL8zt8PpYpfxD0Z2oKX+Ci4uCmzuZETt7irA07e5QE7e5WAr6yeXVQBqYNUDkwKgtiIWnYoG+pKsvI3kuMSoNI1D12I3RrA9diYlBLjEAb6n9kSwHPxSn1mgSPUoNhjSGox2496UtjX4ISPUoFyEbDEJTKrM8eY8lL3WhBZB9fyoWlVg9aMn0SgCHFEg+il5Igce5ANj6KAJ9fyjHagWoSGUp9eikE+imvcEICHIEnVCE8O9EO4d6qSeerSvCD4lY2rQe3AQW7IkclmT1BVk8PFams4dTq7tG/mjafjBKtY1a0WZjgW1GQD2jkf0K0jTHsw8Nd0Ty+kdQJkfmb8zQRLTqgZa+tO6p5+S8b7GD8sdXlkuenCHozekyt+623zjb5FatOG37M+ZTn1i0u+jTZRosk3Q0n3gcNgDTJxOBF36lfobQppk1qxJquxkxM7eH0j5Vub21W/CZbsInxnxCxte1sH+4wt4jEcj+hXM421eVxiML9qefwmL2/GIMyUma2T5W7K2t8fExWkbe1jSSVpNipPrvedRxJ4bOePYshpakKr7rXS3bkOWa2vQlgZTaLoxOvWesrnU5XT0r+ux0NDomZsm5QJYNEtpkEDHqW3UsGrzMpyRgrKpgQFyNTXaZyY6s2naBb3FFVh44KLSwjxMhnzUCgqjgq+lG4Of7qGuN3vPmvs1jyGceJZ0iBqbEnSjK4OZQNUamd/qQmIyLxVCPS8FSKg3BzRvN3O8piTkW9KEnTdfJAObuDn+yhcNwc/wBlFhkN03BEVOCWRuD12IFw3FIyLL4UvKuRu+uSQuG4PXYgyLS9C/1Ks7bg5/shfG4PXYosRkWX0wf1Kq+NweuxEVBuD12KcRkW3upC8lvDd9ckS9uwclBNw3ipJS9I3Z3Ilw2dyAkHb4KQdqN4bES4bO5BsC96lAOMnFQu4eCF47PBVJCXcV53PO0dysNQ7B3LzvqndHcg2K3Vo1jmFS+1cR66kxq/SO5EO1xj1DBaPFuIJQSWb/2TPpaEtNoIGvIxMcM1TVsbSIdj15ckDVe4+6Bd2pXGoDlI25fyvF6zj9WpffFfZ93OvR0ML5SlujKIyYMOGHJe6nSDRgIHrUF5H1XaxH6KptV7jsb+q5q1Wad+sbXRzYyM44LzP/ZQOxxQefNa+omJgtTS0iBqCWeHrkote8GbGTNtTSEVF9oPFKQAJ1FFBcYKEKKIAYqYqKISTFSCgohFgwUpBUUQksxOCVw2KKIRYWCpBUUQBgoQoogGDUYKiiE2ARxQA4qKKAQBEtUUQFRC8dUFBRVYFYYcJSPfjioovFf/AEF5ypx3bnY4EkWkHSbEwqkKKLyy8jpskFnTTmEzHtGbRHUoostHUtEraTEyQO6izMtxKqfZQdZHJFRbVeYlsZiLe4xLUmO88/8AlDtRUUU/saeBsRWk/9k='}} style = {{width:315,height:120,position:'absolute'}}></Image>
        <Text style = {styles.bigText}>      Lunch         </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress= {() => this.props.navigation.navigate('Snack')} style = {styles.snack}>
        <Image source = {{uri:'https://thumbs.dreamstime.com/z/snack-food-love-doodle-seamless-pattern-illustration-blue-background-35087603.jpg'}} style = {{width:315,height:120,position:'absolute'}}></Image>
        <Text style = {styles.bigText}>       Snacks      </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress= {() => this.props.navigation.navigate('Dinner')} style = {styles.dinner}>
        <Image source = {{uri:'https://media.istockphoto.com/photos/thanksgiving-dinner-background-picture-id1050723684?k=6&m=1050723684&s=170667a&w=0&h=8PXfqetEmtHQTJ072_zuKFCcn52O7FvEh82KCsKvJDI='}} style = {{width:315,height:120,position:'absolute'}}></Image>
        <Text style = {styles.bigText}>       Dinner       </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress= {() =>   this.props.navigation.navigate('Home')} style = {styles.button}>
    <Image source = {home} style = {{width:50,height:50,}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Sleep')} style = {styles.button2}>
      <Image source = {sleep} style = {{width:50, height:50,}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Food')} style = {styles.button3}>
      <Image source = {{uri:'https://i.pinimg.com/originals/01/be/7e/01be7eb316abb4dd89675274dbc0cd21.jpg'}} style = {{width:50, height:50,}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Profile')} style = {styles.button4}>
      <Image source = {{uri:'https://image.flaticon.com/icons/png/512/16/16363.png'}} style = {{width:50, height:50,}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Gym')} style = {styles.button5}>
      <Image source = {{uri:'https://static.thenounproject.com/png/5250-200.png'}} style = {{width:50, height:50,}}/>
    </TouchableOpacity>
    </View>
  )
}}
export default FoodScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic:{
    position: 'absolute',
    top:50,
    fontWeight:'bold',
    fontSize:20,
    alignItems: 'center',
  },
  button:{
    position: 'absolute',
    bottom:0,
    backgroundColor:'black',
    padding: 5,
    borderRadius: 5,
  },
  button2:{
    position:'absolute',
    bottom:0,
    left:90,
    backgroundColor:'white',
    padding: 5,
    borderRadius: 5,
  },
  button3:{
    position:'absolute',
    bottom:0,
    backgroundColor:'white',
    left:0,
    padding: 5,
    borderRadius: 5,
  },
  button4:{
    position:'absolute',
    bottom:0,
    backgroundColor:'white',
    right:0,
    padding: 5,
    borderRadius: 5,
  },
  button5:{
    position:'absolute',
    bottom:0,
    backgroundColor:'white',
    right:90,
    padding: 5,
    borderRadius: 5,
  },
  breakfast:{
    position:'absolute',
    top:100,
    backgroundColor:'white',
    padding:35,
    borderRadius: 20,
  },
  bigText:{
    fontSize:40,
    alignItems:'center',
    fontWeight:'bold',
    color:'darkorange',
  },
  lunch:{
    position:'absolute',
    top:250,
    backgroundColor:'white',
    padding:35,
    borderRadius: 20,
  },
  snack:{
    position:'absolute',
    top:400,
    backgroundColor:'white',
    padding:35,
    borderRadius: 20,
  },
  dinner:{
    position:'absolute',
    top:550,
    backgroundColor:'white',
    padding:35,
    borderRadius: 20,
  }
});
