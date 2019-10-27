<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">
    
    <xsl:template match="/">
        <html>
            <head>
                <title><xsl:value-of select="doc/tit"/></title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
        
    </xsl:template>
    <xsl:template match="doc">
          <table>
              <tr>
                  <th>Titulo: </th><td><xsl:value-of select="tit"/></td>
                  
              </tr>
              <tr>
                 <th>Musico: </th><td><xsl:value-of select="musico"/></td>
              </tr>
              <tr>
                  <th>Província: </th><td><xsl:value-of select="prov"/></td>
              </tr>
              <tr>
                  <th>Local: </th><td><xsl:value-of select="local"/></td>
              </tr>
              <tr>
                  <th>Duração: </th><td><xsl:value-of select="duracao"/></td>
              </tr>
              
          </table>
    </xsl:template>
    
</xsl:stylesheet>