# @htmplar/plugin-react

React based components for @htmplar app development. @htmplar/plugin-react is a set of React components and Server Side Renderer for e-mails and e-mail content blocks.

# Components
* [Content](#content)
* [Block](#block)
* [Table](#table)
* Row
* Column
* [Caption](#caption)
* [Menu](#menu)
* [Link](#link)
* [Headline](#headline)
* [Heading](#heading)
* [Button](#button)
* [Image](#image)
* [Text](#text)
* [Line](#line)

## Content
Content component serves as a separator between different sections by add HTML comments before and after of the HTML code block.

``` js
<Content name="My Content">
  {children}
</Content>
```

``` html
<!-- My Content block starts here! -->
HTML Code
<!-- My Content block ends here! -->
```

## Block
Block component is the main component for creating email sections.

``` js
<Block className="my-block" valign="middle">
  Hello World
</Block>
```

``` html
<table class="htmplar-block-outer my-block-outer" border="0" cellPadding="0" cellSpacing="0" width="100%">
  <tr class="htmplar-block-outer-row">
    <td class="htmplar-block-container" valign="middle">
      <!--[if (gte mso 9)|(IE)]>
      <table align="center" border="0" cellspacing="0" cellpadding="0" width="640" style="width:640px;">
        <tr>
          <td align="center" valign="top" width="640" style="width:640px;">
      <![endif]-->
      <table class="htmplar-block my-class" border="0" cellPadding="0" cellSpacing="0" align="center">
        <tr class="htmplar-row">
          <td valign="middle" class="htmplar-block-inner htmplar-cell">
            Hello World
          </td>
        </tr>
      </table>
      <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
      </table>
    <![endif]-->
    </td>
  </tr>
</table>
```

## Table
Generates a table html

``` js
<Table className="my-table">
  Hello World
</Table>
```

``` html
<table class="htmplar-block my-table" border="0" cellPadding="0" cellSpacing="0" align="center">
  <tr class="htmplar-row">
    <td valign="middle" class="htmplar-block-inner htmplar-cell">
      Hello World
    </td>
  </tr>
</table>
```

## Caption
Generates an HTML with image, title and text parts.

## Menu
Generates an HTML table with menu links from an array.

## Link
Generates a link

## Headline
Generates a H1 element

## Heading
Generates a H2 element

## Button
Generates a responsive button

## Image
Generates a responsive image

## Text
Wraps the text with paragraph element

## Line
Draws a horizontal line